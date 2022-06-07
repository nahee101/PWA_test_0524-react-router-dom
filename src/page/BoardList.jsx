import { NavLink, Outlet } from 'react-router-dom';

const BoardList = () => {
    const pageList = [1, 2, 3, 4, 5]
    const crrBoardStyle = {
        color: 'green',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h1>Board</h1>
            
            <p>
                파라미터 및 중첩 라우터를 사용해서 <br />
                아래 숫자를 누르면 해당 숫자의 Board 내용이 보입니다.
            </p>

            <ul>
                {
                    pageList.map((p, idx) => (
                        <li key={idx}>
                            <NavLink
                            style={({isActive}) => (
                                isActive ? crrBoardStyle : undefined
                            )}
                            to={`/boardlist/${p}`}>
                                게시글 {p}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <Outlet />
        </div>
    );
};

export default BoardList;