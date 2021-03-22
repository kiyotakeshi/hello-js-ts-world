// import { FC } from 'react'; // FC は FunctionComponent
import { Component, ReactElement } from 'react';
import CharacterList, { Character } from './CharacterList'; // Character は型エイリアス
import './App.css';

// const App: FC = () => {
//     const characters: Character[] = [
//         {
//             id: 1,
//             name: '桜木花道',
//             grade: 1,
//             height: 189.2,
//         },
//         {
//             id: 2,
//             name: '流川 楓',
//             grade: 1,
//             height: 187,
//         },
//         {
//             id: 3,
//             name: '宮城リョータ',
//             grade: 2,
//             height: 168,
//         },
//         {
//             id: 4,
//             name: '三井 寿',
//             grade: 3,
//         },
//         {
//             id: 5,
//             name: '赤木剛憲',
//             grade: 3,
//             height: 197,
//         },
//     ];

//     return (
//         <div className="container">
//             <header>
//                 <h1>登場人物</h1>
//             </header>
//             {/* 属性が props として子コンポーネントである CharacterList に渡される */}
//             <CharacterList school="高校" characters={characters} />
//         </div>
//     );
// };

// class component
// React が提供する Component を継承
class App extends Component {

    // characters がクラスのメンバー変数として定義
    // TypeScript のプロパティ初期化子
    characters: Character[] = [
        {
            id: 1,
            name: '桜木花道',
            grade: 1,
            height: 189.2,
        },
        {
            id: 2,
            name: '流川 楓',
            grade: 1,
            height: 187,
        },
        {
            id: 3,
            name: '宮城リョータ',
            grade: 2,
            height: 168,
        },
        {
            id: 4,
            name: '三井 寿',
            grade: 3,
        },
        {
            id: 5,
            name: '赤木剛憲',
            grade: 3,
            height: 197,
        },
    ];

    // メンバーメソッド render() の戻り値がレンダリング対象
    render(): ReactElement {
      return(
        <div className="container">
          <header>
            <h1>登場人物</h1>
          </header>
          <CharacterList school="高校" characters={this.characters} />
        </div>
      )
    }

}

export default App;
