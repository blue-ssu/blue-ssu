import { styled } from "styled-components";

const Divver = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100vw;
`;

const Letters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const Letter = styled.span<{ index: number; size: string; delay: string }>`
    font-size: 8rem;
    @keyframes variable-loop {
        0% {
            font-weight: 45;
        }
        50% {
            font-weight: 930;
        }
        100% {
            font-weight: 45;
        }
    }
    --delay: calc((${(props) => props.index} + 1) * ${(props) => props.delay});
    animation: variable-loop 4s infinite both;
    animation-delay: var(--delay);
    text-align: center;
    font-size: ${(props) => props.size};
    line-height: ${(props) => props.size};
    font-feature-settings: "calt";
    will-change: scroll-position;
`;

export function Subtitle({
    text,
    size,
    delay,
}: {
    text: string;
    size: string;
    delay: string;
}) {
    return (
        <Divver>
            <Letters>
                {text.split("").map((letter, index) => (
                    <Letter key={index} index={index} size={size} delay={delay}>
                        {letter}
                    </Letter>
                ))}
            </Letters>
        </Divver>
    );
}
