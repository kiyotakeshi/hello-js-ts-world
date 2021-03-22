// import { FC } from 'react';
import { Component, ReactElement } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

// 型エイリアス
export type Character = {
    id: number;
    name: string;
    grade: number;
    height?: number; // ? は省略可能
};

type Props = {
    school: string;
    characters: Character[];
};

// // FC に型引数を渡すことで、そのコンポーネントの props の型を指定できる
// // props から school, characters を抽出する分割代入の処理を引数の受け渡しに移した
// // アロー関数の中身に return 文しかないので return を省略
// const CharacterList: FC<Props> = ({ school, characters }) => (
//     // フラグメント(JSX では最上位階層の要素は一つでないといけないが、意味のない <div> 階層を作りたくない時に使用)
//     <>
//         <Header as="h2">{school}</Header>
//         <Item.Group>
//             {characters.map((character) => (
//                 <Item key={character.id}>
//                     <Icon name="user circle" size="huge" />
//                     <Item.Content>
//                         <Item.Header>{character.name}</Item.Header>
//                         <Item.Meta>{character.grade}年生</Item.Meta>
//                         <Item.Meta>
//                             {/* 設定されていなければ参照値は undefined なので '???' が返る */}
//                             {/* nullish coalescing で記述 */}
//                             {character.height ?? '???'}cm
//                         </Item.Meta>
//                     </Item.Content>
//                 </Item>
//             ))}
//         </Item.Group>
//     </>
// );

// class component
class CharacterList extends Component<Props> {
    render(): ReactElement {
        // 関数コンポーネントのように関数の引数として props を渡せないので、 this.props に格納されているのを取り出す
        // コンストラクタで初期化をおこなう必要があるが、初期化する処理がなかったので省略
        const { school, characters } = this.props;

        return (
            <>
                <Header as="h2">{school}</Header>
                <Item.Group>
                    {characters.map((character) => (
                        <Item>
                            <Icon name="user circle" size="huge" />
                            <Item.Content>
                                <Item.Header>{character.name}</Item.Header>
                                <Item.Meta>{character.grade}</Item.Meta>
                                <Item.Meta>
                                    {character.height ?? '???'}cm
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </>
        );
    }
}

export default CharacterList;
