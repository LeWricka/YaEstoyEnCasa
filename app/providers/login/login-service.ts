import {Injectable, Component, Inject} from '@angular/core';
import {HomePage} from "../../pages/main/home";
import {ListPage} from "../../pages/list/list";
import {Observable} from 'rxjs/Observable';
declare var firebase:any;

export class LoginService {
    load() {
        firebase.auth().signInWithEmailAndPassword('iker@540deg.com', '111111').then(function (user) {
            console.log("AUTH OK " + user.provider + " " + user.uid);
        }, function (error) {
            console.log(error.name);
            console.log(error.message);
        });
    }

    getUser() {
        return firebase.auth().currentUser;
    }

    logOut() {
        firebase.auth().signOut();
    }

    // loginState = firebase.auth().onAuthStateChanged(function (_currentUser) {
    //     if (_currentUser) {
    //         console.log('User logged!');
    //         this.events.publish('user:login');
    //     } else {
    //         console.log('User logged out!');
    //         this.events.publish('user:logout');
    //     }
    // })
}
