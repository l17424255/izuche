import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Helper} from "./helper.service";


@Injectable()
export class FileUploadService {
  /**
   * @param Observable<number>
   */
  private progress$: Observable<any>;

  /**
   * @type {number}
   */
  private progress: number = 0;

  private progressObserver: any;

  imageUploadAPI: string = this.helper.getAPP('imageUtil/uploadImage');

  constructor (private helper: Helper) {
    this.progress$ = new Observable(observer => {
      this.progressObserver = observer
    });
  }

  /**
   * @returns {Observable<number>}
   */
  public getObserver (): Observable<number> {
    return this.progress$;
  }

  /**
   * Upload files through XMLHttpRequest
   *
   * @param url
   * @param files
   * @returns {Promise<T>}
   */
  public upload (url: string, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      FileUploadService.setUploadUpdateInterval(500);

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        if (this.progressObserver) {
          this.progressObserver.next(this.progress);
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

  /**
   * Set interval for frequency with which Observable inside Promise will share data with subscribers.
   *
   * @param interval
   */
  private static setUploadUpdateInterval (interval: number): void {
    setInterval(() => {}, interval);
  }
}
