import React from 'react';

const TextInput: React.FunctionComponent = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = (): void => {
        console.log(inputRef.current);
        // .focus() メソッドが実行しできるのは、 HTML DOM の HTMLInputElement オブジェクトになる　
        if (inputRef.current) inputRef.current.focus();
    };

    return (
        // HTML のように記載したものは実際は、 React の組み込みコンポーネントに変換される　
        <div>
            {/* ref はコンポーネントを実際にレンダリングされるリアルDOMへ結びつける参照のための属性 */}
            {/* ref 属性の中に任意のオブジェクトを設定しておくと、 */}
            {/* 組み込みコンポーネントがリアルDOMにレンダリングされた際に、渡されたオブジェクトの .current プロパティに参照値を入れられる */}
            <input type="text" ref={inputRef}></input>
            <input type="button" value="Focus" onClick={handleClick}></input>
        </div>
    );
};

export default TextInput;
