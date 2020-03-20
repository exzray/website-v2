import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';

import {Master} from './shared/interfaces/master';
import {About} from './shared/interfaces/about';
import {Service} from './shared/interfaces/service';
import {Package} from './shared/interfaces/package';
import {Contact} from './shared/interfaces/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private masterDoc: AngularFirestoreDocument<Master>;
  private aboutDoc: AngularFirestoreDocument<About>;
  private serviceDoc: AngularFirestoreDocument<Service>;
  private packageDoc: AngularFirestoreDocument<Package>;
  private contactDoc: AngularFirestoreDocument<Contact>;

  public master$: Observable<Master>;
  public about$: Observable<About>;
  public service$: Observable<Service>;
  public package$: Observable<Package>;
  public contact$: Observable<Contact>;

  constructor(private firestore: AngularFirestore) {
    this.masterDoc = firestore.doc('setup/master');
    this.master$ = this.masterDoc.valueChanges();

    this.aboutDoc = firestore.doc('setup/about');
    this.about$ = this.aboutDoc.valueChanges();

    this.serviceDoc = firestore.doc('setup/service');
    this.service$ = this.serviceDoc.valueChanges();

    this.packageDoc = firestore.doc('setup/package');
    this.package$ = this.packageDoc.valueChanges();

    this.contactDoc = firestore.doc('setup/contact');
    this.contact$ = this.contactDoc.valueChanges();
  }

  ngOnInit(): void {
  }

  public scrollTo(id: string): void {
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
}
