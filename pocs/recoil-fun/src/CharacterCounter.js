import logo from './logo.svg';
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
      return text.length;
    },
});

function TextInput() {
    const [text, setText] = useRecoilState(textState);
    const onChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <br/>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}

function CharacterCounter() {
    const count = useRecoilValue(charCountState);
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Facebook Recoil
            </header>
            <main>
                <div>
                    <TextInput />
                    Character Count: {count}
                </div>
            </main>
        </div>
    );
}
export default CharacterCounter;