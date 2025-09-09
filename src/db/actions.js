import { url } from "./urlConnector";
import Axios from "axios";

class ManageDatabaseRequests {
  static async AddAccountToDatabase(name, password) {
    const response = await Axios.post(url + "users/addAccount", null, {
      params: {
        name,
        password,
      },
    });
    console.log(response.data);
    return response.data;
  }

  static async CreateInvitation(
    name,
    date,
    location,
    otherDetails,
    type,
    userId,
    latitude,
    longitude, 
    decoIndex
  ) {
    // dont forget to return the id of the invitation that will be in the endpoint as a parameter

    const response = await Axios.post(
      url + "invitations/createInvitation",
      null,
      {
        params: {
          name,
          date,
          location,
          otherDetails,
          type,
          userId,
          latitude,
          longitude,
          decoIndex
        },
      }
    );
    return response;
  }
  static async GetInviteInfo(inviteId) {
    const response = await Axios.post(url + "invitations/getInviteInfo", null, {
      params: {
        inviteId,
      },
    });
    return response;
  }
  static async GetUserInfo(userId) {
    const response = await Axios.post(url + "users/getUserInfo", null, {
      params: {
        userId,
      },
    });
    return response;
  }
  static async AddGuest(inviteId, guestName, guestEmail, guestCount) {
    const response = await Axios.post(url + "guests/addGuest", null, {
      params: {
        inviteId,
        guestName,
        guestEmail,
        guestCount,
      },
    });
    return response;
  }
  static async DeleteGuest(inviteId, guestId) {
    const response = await Axios.post(url + "guests/deleteGuest", null, {
      params: {
        inviteId,
        guestId,
      },
    });
    return response;
  }

  static async GetGuests(userId) {
    const response = await Axios.post(url + "guests/getGuests", null, {
      params: {
        userId,
      },
    });
    return response;
  }

  static async CheckUserExistanceByNameAndPassword(name, password) {
    const response = await Axios.post(url + "users/checkUserExistance", null, {
      params: {
        name,
        password,
      },
    });
    return response.data;
  }

  static async IsEmailAlreadyUsed(email, inviteId) {
    const response = await Axios.post(
      url + "guests/isEmailAlreadyUsed",
      null,
      {
        params: {
          email,
          inviteId,
        },
      }
    );
    return response.data;
  }
  
  static async getAccountInExistence(){
    const response = await Axios.post(url + 'users/getAll', null)
    return response.data;
  }
  static async removeAllAccountData(_id){ // the id of the account
    const _ = await Axios.post(url +'users/delUser', null, {params: {_id}})
    return _;
  }

  static async updateFirstLoginToFalse(userId) {
    const response = await Axios.post(url + "users/updateFirstLoginToFalse", null, {params: {userId}});
    return response.data;
  }
}
export default ManageDatabaseRequests;
