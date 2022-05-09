import './../../../style/Content.css';
import back from "../../../img/vector/white-back.png";
import forward from "../../../img/vector/white-forward.png";
import photo from "../../../img/vector/photo.png";
import on from "../../../img/vector/star-on.png";
import off from "../../../img/vector/star-off.png";
import CarouselCompound from "./carousel-compound/index-reviews";

function Content() {


    return (
        <div className="reviews">
            <div className="one-bloke-reviews">
                <div className="header-reviews">Отзывы пользователей об Автоцентре</div>
                <div className="grade-reviews">4.6</div>
                <div className="text-grade-reviews">Средняя оценка</div>
            </div>
            <div className="two-bloke-reviews">

                <CarouselCompound infinite>
                    <CarouselCompound.Page>
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
                            </div>
                        </div>
                        <div className="text-personality-reviews">
                            <p>Решил убить сразу несколько зайцев, и пока гуляли с женой по меге<br/>
                                оставил свою Volvo на диагностику в данном центре. Знаю что меняли<br/>
                                ранее в другом центре, и что уже нужно было поменять. В этом <br/>
                                центре лишнего не насчитали, проблемы нашли. В следующий раз <br/>
                                приеду уже за полным ТО.</p>
                        </div>
                    </CarouselCompound.Page>
                    <CarouselCompound.Page>
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
                                        <img src={on} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-personality-reviews">
                            <p>Отличный сервис. Спасибо большое менеджеру Александру, помог и<br/>
                                разъяснил (грамотно). Самое главное нашел причину и устранил . Не<br/>
                                первый раз обращаюсь и пока всем доволен (обращался<br/>
                                01.06.2018г). Немного о самом сервисе. Клиентская зона на твердую<br/>
                                5 . Есть чай и кофе, и пока делают машину, можно занять себя <br/>
                                просмотром телевизора. Сама зона просматривается сквозь стекла.<br/>
                                Так что можно всегда посмотреть , на какой стадии ремонт! За это я<br/>
                                ставлю 5+.</p>
                        </div>
                    </CarouselCompound.Page>
                </CarouselCompound>
            </div>
        </div>
    );
}

export default Content;


