import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: boolean = false;

  constructor() {
    this._isLoading$ = new BehaviorSubject<boolean>(false);
  }

  private _isLoading$: BehaviorSubject<boolean>;
  public get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  get isLoading(): boolean {
    return this.loading;
  }
}
