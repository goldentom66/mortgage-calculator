import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { async, TestBed, inject } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let santizer;

  beforeEach(async(() => {
    santizer = {
      bypassSecurityTrustHtml: jasmine.createSpy("bypassSecurityTrustHtml")
    };

    TestBed.configureTestingModule({
      declarations: [
        SafeHtmlPipe
      ],
      providers: [
        { provide: DomSanitizer, useValue: santizer },
        SafeHtmlPipe
      ]
    });
  }));

  beforeEach(
    inject([SafeHtmlPipe], (sp) => {
      pipe = sp;
    })
  );

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should call bypassSecurityTrustHtml', () => {
    pipe.transform('any string');
    expect(santizer.bypassSecurityTrustHtml).toHaveBeenCalled();
  });
});
