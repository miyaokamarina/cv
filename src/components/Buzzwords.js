// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';

import { Chips } from '~/kit/Chips';
import { Theme } from '~/kit/Theme';
import { ChipsChip } from '~/kit/ChipsChip';

const flag = `
    #ff0000 000.00%,
    #ff0000 016.67%,
    #ff8000 016.67%,
    #ff8000 033.33%,
    #ffff00 033.33%,
    #ffff00 050.00%,
    #1fb557 050.00%,
    #1fb557 066.67%,
    #4040ff 066.67%,
    #4040ff 083.33%,
    #ff00ff 083.33%,
    #ff00ff 100.00%
`;

const outline = (() => {
    const shadows = [];
    const size = 2;
    const step = 0.1;

    for (let x = -size; x <= size; x = x + step) {
        for (let y = -size; y <= size; y = y + step) {
            const distance = Math.sqrt(x * x + y * y);

            if (distance <= size) {
                shadows.push(`${x}px ${y}px 0 #fff`);
            } else if (distance <= size + step) {
                const delta = distance - size;

                shadows.push(`${x}px ${y}px 0 rgba(255, 255, 255, ${Math.sqrt(delta)})`);
            }
        }
    }

    return shadows.join(',');
})();

const rainbow = css`
    color: #00f;
    box-shadow: 0 0 0 transparent;
    background-image: linear-gradient(90deg, ${flag});
    font-weight: 600;
    text-shadow: ${outline};
`;

const buzzwordsFilter = (category, level) => ({ categories, level: level_ }) => {
    if (!level[level_]) {
        return false;
    }

    const enabledCategories = Object.entries(category).filter(([, x]) => x);

    for (const [id] of enabledCategories) {
        if (categories.find(x => x === id)) {
            return true;
        }
    }

    return false;
};

export const Buzzwords = connect(({ buzzwords, category, level }) => ({ buzzwords, category, level }))(({ buzzwords, category, level }) => (
    <Theme>
        {__ => (
            <Chips
                css={css`
                    justify-content: center;
                    margin: -${__.cellS5};
                `}
            >
                {buzzwords &&
                    buzzwords.filter(buzzwordsFilter(category, level)).map(x => (
                        <ChipsChip key={x.key || x.title} level={x.level} css={x.rainbow ? rainbow : null}>
                            {x.title}
                        </ChipsChip>
                    ))}
            </Chips>
        )}
    </Theme>
));
