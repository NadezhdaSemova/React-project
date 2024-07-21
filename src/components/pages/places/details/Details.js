import { useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import './details.css';

export default function Details({
    places,
}) {


    const location = useLocation();
    const id = location.pathname.split('/').pop();
    const currentPlace = places.filter( (p) => p._id === id)[0];
    
    return (
        <>
            <section className="current-place">
                <div className="container">
                    <div className="place">
                        <h1>{currentPlace.place}</h1>
                        <div className="information">
                            <div className="media">
                                <img src={currentPlace.imgUrl} alt="" />
                            </div>
                            <article>
                                <p>{currentPlace.description}
                                </p>
                                <p className="fa-solid fa-thumbs-up"> Likes { currentPlace.likes }</p>
                                <div className="btn-like">
                                    <button >
                                        {/* *ngIf="currentUserId != postOwner" (click)="getLikes()" */}
                                        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button>

                                </div>
                                <div className="btn-action">
                                    <button>
                                        {/* *ngIf="currentUserId == postOwner" [routerLink]="['/edit/', currentPlace._id]" */}
                                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button>
                                    <button>
                                        {/* *ngIf="currentUserId == postOwner" (click)="deletePlace()" */}
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                                </div>
                            </article>

                        </div>


                        <div className="show-btn">
                            <button> Show Comments:</button>
                    </div>
                    <div className="coment-bottom bg-white p-2 px-4">
                        <form >
                            <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                <input type="text" name="inputComment" className="form-control mr-3" placeholder="Add comment"/>
                                    <button className="btn btn-primary" type="button">Comment</button>
                            </div>
                        </form>
                        <section className="container-comments">
                            <div className="commented-section mt-2">
                            <div className="comment-info">
                                <h5 className="mr-2"><b>Author:</b> { "comment.email" } </h5>
                                <span> <b>Post at:</b></span>
                            </div>
                            <hr/>
                                <div className="comment-text-sm"><span><b>Comment:</b><br/></span></div>
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