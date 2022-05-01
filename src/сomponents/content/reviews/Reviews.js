import './../../../style/Content.css';
import back from "../../../img/vector/white-back.png";
import forward from "../../../img/vector/white-forward.png";
import photo from "../../../img/vector/photo.png";
import on from "../../../img/vector/star-on.png";
import off from "../../../img/vector/star-off.png";

function Content() {


    return (
        <div className="reviews">
            <div className="one-bloke-reviews">
                <div className="header-reviews">Отзывы пользователей об Автоцентре</div>
                <div className="grade-reviews">4.6</div>
                <div className="text-grade-reviews">Средняя оценка</div>
            </div>
            <div className="two-bloke-reviews">
                <div className="header-bloke-reviews">
                    <div className="personality-reviews">
                        <div className="photo">
                            <img src={photo} alt=""/>
                        </div>
                        <div className="user-data">
                            <div className="user-name">butyl1n_i</div>
                            <div className="revocation-date">23 декабря 2020</div>
                            <div className="evaluation-scale">
                                <img src={on} alt=""/>
                                <img src={on} alt=""/>
                                <img src={on} alt=""/>
                                <img src={on} alt=""/>
                                <img src={off} alt=""/>
                            </div>
                        </div>
                        <div className="back-and-forward-reviews">
                            <div className="back-button-reviews">
                                <img src={back} alt=""/>
                            </div>
                            <div className="forward-button-reviews">
                                <img src={forward} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-personality-reviews">
                    <p>Решил убить сразу несколько зайцев, и пока гуляли с женой по меге оставил свою Volvo на диагностику в данном центре. Знаю что меняли ранее в другом центре, и что уже нужно было поменять. В этом центре лишнего не насчитали, проблемы нашли. В следующий раз приеду уже за полным ТО.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;


