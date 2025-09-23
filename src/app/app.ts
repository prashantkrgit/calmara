import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  title = signal('Coming Soon');

  private readonly launchDate = new Date('2025-12-31T00:00:00');
  private readonly now = signal(new Date());

  constructor() {
    setInterval(() => this.now.set(new Date()), 1000);
  }

  // Reactive countdown
  private readonly countdown = computed(() => {
    const totalSeconds = (this.launchDate.getTime() - this.now().getTime()) / 1000;
    return {
      total: totalSeconds,
      days: Math.floor(totalSeconds / 3600 / 24),
      hours: Math.floor(totalSeconds / 3600) % 24,
      minutes: Math.floor(totalSeconds / 60) % 60,
      seconds: Math.floor(totalSeconds) % 60,
    };
  });

  // Individual signals for each part of the countdown
  days = computed(() => this.countdown().days);
  hours = computed(() => this.countdown().hours);
  minutes = computed(() => this.countdown().minutes);
  seconds = computed(() => this.countdown().seconds);
  isLive = computed(() => this.countdown().total <= 0);
}
