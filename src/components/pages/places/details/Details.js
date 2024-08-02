import './details.css';
import { Places } from '../../../../service/placeService';
import { CurrentPlace } from './CurrentPlace';

export default function Details() {

    const places = Places();


    return (
        <>
            <section className="current-place">
                <div className="container">
                    <div className="place">
                        <CurrentPlace places={places} />

                        <div className="show-btn">
                            <button> Show Comments:</button>
                        </div>
                        <div className="coment-bottom bg-white p-2 px-4">
                            <form >
                                <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                    <input type="text" name="inputComment" className="form-control mr-3" placeholder="Add comment" />
                                    <button className="btn btn-primary" type="button">Comment</button>
                                </div>
                            </form>
                            <section className="container-comments">
                                <div className="commented-section mt-2">
                                    <div className="comment-info">
                                        <h5 className="mr-2"><b>Author:</b> {"comment.email"} </h5>
                                        <span> <b>Post at:</b></span>
                                    </div>
                                    <hr />
                                    <div className="comment-text-sm"><span><b>Comment:</b><br /></span></div>
                                </div>
                            </section>

                            <section >
                                <h1>There is no comments</h1>
                            </section>

                        </div>
                    </div>
                </div >

            </section >
        </>
    )
}