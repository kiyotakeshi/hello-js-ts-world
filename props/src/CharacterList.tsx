import { FC } from 'react';
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

// FC に型引数を渡すことで、そのコンポーネントの props の型を指定できる
// props の値を第一引数 props として受け取ることができる
const CharacterList: FC<Props> = (props) => {
    const { school, characters } = props;
    console.log(characters);

    // 関数コンポーネントではレンダリングしたい内容を戻り値として return で返す
    // FC 型で戻り値の型として定義されているのは ReactElement か null(何もレンダリングしない)
    return (
        // フラグメント(JSX では最上位階層の要素は一つでないといけないが、意味のない <div> 階層を作りたくない時に使用)
        <>
            <Header as="h2">{school}</Header>
            <Item.Group>
              {characters.map((character) => (
                <Item key={character.id}>
                  <Icon name="user circle" size="huge"/>
                  <Item.Content>
                    <Item.Header>{character.name}</Item.Header>
                    <Item.Meta>{character.grade}年生</Item.Meta>
                    <Item.Meta>
                      {/* 設定されていなければ参照値は undefined なので '???' が返る */}
                      {character.height ? character.height : '???'}cm
                    </Item.Meta>
                  </Item.Content>
                </Item>
              ))}
            </Item.Group>
        </>
    );
};

export default CharacterList;