import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@Stores/index';
const MypagePresenter = () => {
    //     const [value, setValue] = React.useState('');
    //     const dispatch = useDispatch();
    //     const updateTodo = React.useCallback((todo: string) => dispatch(addTodo({ todo: todo })), [dispatch]);
    //     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setValue(e.target.value);
    //     };
    //     const onSubmit = (e: React.FormEvent) => {
    //         e.preventDefault();
    //         updateTodo(value);
    //         setValue('');
    //     };

    //     const todolist = useSelector((state: RootState) => state.todo.todo);

    return (
        <div>마이페이지</div>
        //         <>
        //             <form onSubmit={onSubmit}>
        //                 <input placeholder="todo input" value={value} onChange={onChange} />
        //                 <button type="submit">등록</button>
        //             </form>
        //             {todolist.map((d: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
        //                 return (
        //                     // eslint-disable-next-line react/jsx-key
        //                     <li>
        //                         <span>{d}</span>
        //                     </li>
        //                 );
        //             })}
        //         </>
    );
};
export default MypagePresenter;
