import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GetOnePlace } from '../../../../service/placeService';
import { useState } from 'react';

export function CurrentPlace() {

    // const [authorId, setAuthorId] = useState("falce");
    const location = useLocation();
    const id = location.pathname.split('/').pop();
    const currentPlace = GetOnePlace(id);


    const isAuthor = () => {

    }

    return (
        <>
            <h1>{currentPlace.place}</h1>
            <div className="information">
                <div className="media">
                    <img src={currentPlace.imgUrl} alt="" />
                </div>
                <article>
                    <p>{currentPlace.description}
                    </p>
                    <p className="fa-solid fa-thumbs-up"> Likes {currentPlace.likes}</p>
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
        </>
    )
}