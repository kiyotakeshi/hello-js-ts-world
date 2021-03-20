import React from 'react';

const SummaryText: React.FunctionComponent = ({ children }) => {
    console.log("SummaryText children");
    console.log(children);

    // React の組み込みコンポーネントの props と標準HTMLの要素の属性の名前の違いで、
    // JavaScript の予約語と被ってしまったため、 class(要素にスタイルを適用するためのCSSクラス名を設定するもの) は className となっている
    // for(<input>,<select>などラベル付可能なフォーム要素への入力の関連付を、<label>要素に設定するためのもの) は htmlFor となる
    return <div className="story">{children}</div>

//     return(
//         <>
//             <form>
//                 {/* React では textarea, select も value 属性を持てる */}
//                 {/* textarea は HTML なら小要素として値を持つ、 slect はそもそも値を持てない */}
//                 <textarea value="Field Text" />
//                 <select value="uranus">
//                     <option value="saturn">Saturn</option>
//                     <option value="uranus">Uranus</option> {/* selected */}
//                     <option value="neptune">Neptune</option>
//                 </select>
//             </form>
//         </>
//     )
}

export default SummaryText;
