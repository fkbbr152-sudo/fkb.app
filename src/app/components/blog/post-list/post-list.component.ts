import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../../model/services/post.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit, AfterViewChecked {
  posts: { username: string; embedCode: SafeHtml }[] = [];
  private instagramProcessed = false;

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.map(post => ({
        username: post.username,
        embedCode: this.sanitizer.bypassSecurityTrustHtml(post.embedCode)
      }));

      // Permite nova execução do processamento após atualização do DOM
      this.instagramProcessed = false;
    });
  }

  ngAfterViewChecked(): void {
    if (!this.instagramProcessed && (window as any).instgrm?.Embeds?.process) {
      (window as any).instgrm.Embeds.process();
      this.instagramProcessed = true;
    }
  }

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

scrollLeft() {
  this.scrollContainer.nativeElement.scrollBy({ left: -340, behavior: 'smooth' });
}

scrollRight() {
  this.scrollContainer.nativeElement.scrollBy({ left: 340, behavior: 'smooth' });
}
}
