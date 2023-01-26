import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import st from "./UserProfile.module.css";
import { getUsersDetails, historyUser, createUs } from "../../redux/actions.js";
import UserProfileEdit from "./UserProfileEdit";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ManageAccounts,
  AlternateEmail,
  Pin,
  CalendarMonth,
  Wc,
  Public,
  MyLocation,
  PhoneInTalk,
  AccountBox,
} from "@mui/icons-material";
import ProductCards from "../ProductCards/ProductCards";

export default function UserProfile() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.usersDetails);
  const buggies = useSelector((state) => state.history);
  const users = useSelector((state) => state.users);
  const email = user?.email;
  const favorites = useSelector((state) => state.favorites);
  const products = useSelector((state) => state.allClothes);


  // const userInfo = users?.filter((u) => u.email === user?.email);
  //console.log(user)

  useEffect(() => {
    userInfo && dispatch(historyUser(userInfo._id));
    dispatch(getUsersDetails(user.email));
    user && dispatch(createUs(user));
  }, []);

  const [editMode, setEditMode] = useState(false);

  let props = {};
  userInfo
    ? (props = {
        id: userInfo._id,
        name: userInfo.username,
        email: userInfo.email,
        image: userInfo.image,
        active: String(userInfo.active),
      })
    : console.log(userInfo);


  const changePage = () => {
    console.log("SOY EL EDIT MODE", editMode);
    editMode ? setEditMode(false) : setEditMode(true);
  };

  return (
    <div className={st.Container}>
      <h1 className={st.title}> User Profile </h1>

      <div className={st.userInfo}>
        {!editMode ? (
          <div className={st.userInfo}>
            <div className={st.accountDetails}>
              <h4>Account information</h4>

              <div className=" mt-4 flex justify-around">
                <div className={st.rightSide}>
                  <div className={st.userDetails}>
                    <AccountBox className={st.userShowIcon} />
                    <span className={st.userDetailsInfo}>
                      Name: {props.name}
                    </span>
                  </div>
                  <div className={st.userDetails}>
                    <AlternateEmail className={st.userShowIcon} />
                    <span className={st.userDetailsInfo}>
                      Email: {props.email}
                    </span>
                  </div>
                  <div className={st.userDetails}>
                    <ManageAccounts className={st.userShowIcon} />
                    <span className={st.userDetailsInfo}>
                      Active: {props.active}
                    </span>
                  </div>
                </div>
                {/* 
                            <div className={st.leftSide}>
                                <img src={props.image} alt="Profile Pict" className={st.userImg} />
                            </div> */}
              </div>

              {/* <div className={st.editButton}>
                            <button 
                            className=' w-28 h-14 p-2 bg-slate-900 text-slate-50 rounded-lg flex justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900'
                            name='edit' 
                            // ref={target}
                            onClick={changePage}>
                                Edit profile
                            </button>
                        </div> */}
            </div>
          </div>
        ) : (
          <div className={st.userEditCont}>
            <UserProfileEdit changePage={changePage} editMode={editMode} />
          </div>
        )}
      </div>
      <div className={st.favoritos}> 
        <h2>
          <p>Favorites</p>
        </h2>
        <div style={{ width: "98%" }}>
          <ProductCards
            products={products.filter((p) => favorites[email]?.includes(p._id))}
          />
        </div>
      </div>
      <div className={st.history}>
        <h2>
          <strong>Purchase History</strong>
        </h2>
        {buggies?.map((b) => {
          return (
            <h4 key={b._id}>
              {b.products.map((p) => {
                return p.name;
              })}
            </h4>
          );
        })}
      </div>
    </div>
  );
}
