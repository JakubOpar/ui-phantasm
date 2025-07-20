import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-neon-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './neon-form.html',
  styleUrls: ['./neon-form.scss'],
})
export class NeonForm {
  onSubmit() {
    alert('Form submitted!');
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file.name);
    }
  }
}
