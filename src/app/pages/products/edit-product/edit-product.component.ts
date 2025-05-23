import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdcutService } from '../../../prodcut.service';
import { FormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {ApiService} from '../../../api.service'


@Component({
  selector: 'app-edit-product',
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  prodcutId: any = '';

  constructor(
    private route: ActivatedRoute,
    private ApiService:ApiService,
    private router: Router
  ) {}

 ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.prodcutId = params.get('id');
        this.getName.setValue('');
        this.getPrice.setValue('');
        this.description.setValue('');
        this.getImageURl.setValue('');
      },
    });
    if (this.prodcutId != 0) {
      this.ApiService
        .getOneProduct(this.prodcutId)
        .subscribe((response) => {
          this.getName.setValue(response.name);
          this.getPrice.setValue(response.price.toString());
          this.description.setValue(response.description);
          this.description.setValue(response.imageUrl);
        });
    }
}

 productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get description() {
    return this.productForm.controls['description'];
  }
  get getImageURl() {
    return this.productForm.controls['imageUrl'];
  }

  handleSubmit(event: Event): void {
    if(this.productForm.status == "VALID"){
      if (this.prodcutId == 0) {
          this.ApiService.addProduct(this.productForm.value).subscribe(()=>{
          this.router.navigate(['/products/lists']);
      });
    }else{
      this.ApiService.editProduct(this.prodcutId,this.productForm.value).subscribe(()=>{
          this.router.navigate(['/products/lists']);
     })
    }
  }
}
}