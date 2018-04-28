if (process.env.NODE_ENV === 'development') {
    const map: { [font: string]: { [weight: string]: string } } = {};

    const snapshotToArray = (snapshot: XPathResult) => {
        const result = [];

        for (let i = 0; i < snapshot.snapshotLength; i++) {
            result.push(snapshot.snapshotItem(i));
        }

        return result;
    };

    const addParent = (node: Node): [Node, Element] | null => (node.parentElement ? [node, node.parentElement] : null);
    const matchFilter = ([, parent]: [Node, Element]) => parent.matches('#root *') && !parent.matches('script, style');

    const addFont = ([node, parent]: [Node, Element]): [string, string, string] => {
        const { fontFamily, fontWeight } = getComputedStyle(parent);

        return [node.nodeValue || '', fontFamily || '', fontWeight || ''];
    };

    const updateMap = (list: [string, string, string][]) => {
        list.forEach(([text, font, weight]: [string, string, string]) => {
            if (!map[font]) {
                map[font] = {};
            }

            if (!map[font][weight]) {
                map[font][weight] = '';
            }

            map[font][weight] = [...new Set([...map[font][weight], ...text])].join('');
        });
    };

    const update = () => {
        const snapshot: XPathResult = document.evaluate('//text()', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const resultArray: Node[] = snapshotToArray(snapshot);
        const maybePairs: ([Node, Element] | null)[] = resultArray.map(addParent);
        const pairs: [Node, Element][] = maybePairs.filter(Boolean) as any;
        const matching: [Node, Element][] = pairs.filter(matchFilter);
        const list: [string, string, string][] = matching.map(addFont);
        updateMap(list);
    };

    const get = () => {
        const {
            icons,
            ['main, sans-serif']: main,
            ...rest
        } = map;

        void icons;

        return {
            main,
            ...rest,
        };
    };

    const json = () => JSON.stringify(get(), null, 4);

    (window as any).fonts = {
        update,
        get,
        json,
        __proto__: null,
    };
}
