import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import st from './HelpUsToImprove.module.css';
import { getComments } from '../../../redux/actions';

export default function HelpUsToImprove() {
    const comments = useSelector((state) => state.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [comments])

   
    return (
        <div className={st.Container}>
            <h1 className={st.title}> Help Us To Improve </h1>

            <div className={st.listContainer}>
                <ul className={st.listMessages}>
                    {   comments && comments.map(
                        (msg, index) => {
                            return (
                                <div key={index} className={st.divItem}>
                                  <div className={st.listHead}>
                                      <li className={st.listItem}>
                                          ID: {index + 1}
                                      </li>
                                      <li className={st.listItem}>
                                          Name: {msg.name}
                                      </li>
                                      <li className={st.listItem}>
                                          Email: {msg.email}
                                      </li>
                                      <li className={st.listItem}>
                                          Message: {msg.message}
                                      </li>
                                   </div>
                                </div>
                            )
                        }
                        ).reverse()
                    }
                </ul>
            </div>
        </div>
    )
}