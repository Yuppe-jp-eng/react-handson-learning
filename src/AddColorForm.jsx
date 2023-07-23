import { useColors } from './color-hooks';
import { useInput } from './hook';

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => { 
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);

        //空で再描画
        resetTitle();
        resetColor();
    };
    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text" 
                placeholder='color title...'
                required 
            />
            <input {...colorProps} type="color" required />
            <button>Add</button>
        </form>
    );    
}

// export default function AddColorUncontrolledForm({ onNewColor = f => f }) {

//     // タイトル入力用のInputへの参照(refオブジェクト)
//     const txtTitle = useRef();

//     // 色選択用のInputへの参照
//     const hexColor = useRef();


//     const submit = e => { 
//         e.preventDefault();
//         const title = txtTitle.current.value;
//         const color = hexColor.current.value;
//         onNewColor(title, color);
//         txtTitle.current.value = '';
//         hexColor.current.value = '';
//     };

//     return (
//         <form onSubmit={submit}>
//             {/* refオブジェクトのcurrentフィールド経由でDOM要素へアクセス可能 */}
//             <input ref={txtTitle} type="text" placeholder='color title...' required />
//             <input ref={hexColor} type="color" required />
//             <button>Add</button>
//         </form>
//     );
// }

