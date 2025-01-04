"use client";

import { MouseEvent, useState } from "react";

export default function Home() {
    const [history, setHistory] = useState<string>("0");
    const [result, setResult] = useState<string>("0");

    function handleClick(ev: MouseEvent<HTMLButtonElement>) {
        const value = ev.currentTarget.innerText;

        if (value === 'C') {
            clearAll();
        } else if (value === 'DEL') {
            deleteLastChar();
        } else if (value === '=') {
            evaluateExpr();
        } else {
            appendChar(value);
        }
    }

    function clearAll() {
        setHistory("0");
        setResult("0");
    }

    function deleteLastChar() {
        setResult((prev) => prev.slice(0, -1));
    }

    function appendChar(val: string) {
        setResult((prev) => {
            if (prev === "0") return val;

            return prev += val
        });
    }

    function evaluateExpr() {
        try {
            const res = parseFloat(eval(result).toFixed(5)).toString();

            setHistory(result + "=" + res);
            setResult(res);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_: unknown) {
            setResult("Could not be evaluated.");
        }
    }

    return (
        <section className="@module:pageComponent::calculator">
            <div className="@module:pageComponent::screenContainer">
                <div className="@module:pageComponent::screen">
                    <input
                        className="@module:pageComponent::history"
                        value={history}
                        readOnly
                    />
                    <input
                        className="@module:pageComponent::result"
                        value={result}
                        readOnly
                    />
                </div>
            </div>
            <div className="@module:pageComponent::btnContainer">
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightPink">
                    C
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightPink">
                    DEL
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightBlue">
                    %
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightBlue">
                    /
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn">7</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">8</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">9</button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightBlue">
                    *
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn">4</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">5</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">6</button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightBlue">
                    -
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn">1</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">2</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">3</button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::lightBlue">
                    +
                </button>
                <button onClick={handleClick} className="@module:pageComponent::btn">.</button>
                <button onClick={handleClick} className="@module:pageComponent::btn">0</button>
                <button onClick={handleClick} className="@module:pageComponent::btn @module:pageComponent::equalsBtn">
                    =
                </button>
            </div>
        </section>
    );
}
