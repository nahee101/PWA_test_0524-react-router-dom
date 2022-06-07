/* ⭐ 뒤로 가기 버튼 */
import { useNavigate } from "react-router-dom";

const BtnBack = () => {

    const navigate = useNavigate();
    const goBack = () => {
        /* 이전 페이지로 이동 */
        navigate(-1);
    };

    return (
        <button
        onClick={goBack}
        >뒤로 가기</button>
    );
};

export default BtnBack;