import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class ProductDetailsService {

    constructor() {
    }

    getProductDetails(category) {
        let mockData = {
            cloths: {
                man: [
                    {
                        fullName: 'Funky shirt with long name',
                        shortName: 'Quicksilver',
                        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut.',
                        mainImage: '',
                        extraImages: [
                            '',
                            '',
                            ''
                        ],
                        availableSizes: [
                            'Small',
                            'Medium',
                            'Large'
                        ],
                        price: 143,
                        onSale: 15, //discount percentage
                        isNew: false
                    },
                    {
                        fullName: 'Funky shirt ',
                        shortName: 'Quick sleeve',
                        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut.',
                        mainImage: 'http://hunter.ondrejsvestka.cz/1-2/img/detailbig1.jpg',
                        extraImages: [
                            'http://hunter.ondrejsvestka.cz/1-2/img/detailbig1.jpg',
                            'http://hunter.ondrejsvestka.cz/1-2/img/detailbig2.jpg',
                            'http://hunter.ondrejsvestka.cz/1-2/img/detailbig3.jpg'
                        ],
                        availableSizes: [
                            'Small',
                            'Medium',
                            'Large'
                        ],
                        price: 343,
                        onSale: 15, //discount percentage
                        isNew: true
                    },
                    {
                        fullName: 'Funky shirt short  name',
                        shortName: 'Slow sleeve',
                        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut.',
                        mainImage: '',
                        extraImages: [
                            '',
                            '',
                            ''
                        ],
                        availableSizes: [
                            'Small',
                            'Medium',
                            'Large',
                            'X-Large'
                        ],
                        price: 243,
                        onSale: 5, //discount percentage
                        isNew: true
                    },
                    {
                        fullName: 'Blouse',
                        shortName: 'Short sleeve',
                        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut.',
                        mainImage: '',
                        extraImages: [
                            '',
                            '',
                            ''
                        ],
                        availableSizes: [
                            'Small',
                            'Medium',
                            'Large',
                            'X-Large'
                        ],
                        price: 200,
                        onSale: 5, //discount percentage
                        isNew: true
                    },
                    {
                        fullName: 'Shirt',
                        shortName: 'Long sleeve',
                        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut.',
                        mainImage: '',
                        extraImages: [
                            '',
                            '',
                            ''
                        ],
                        availableSizes: [
                            'Small',
                            'Medium',
                            'Large',
                            'X-Large'
                        ],
                        price: 300,
                        onSale: 5, //discount percentage
                        isNew: true
                    },
                ]
            }


        };
        return new Observable(observer => {
            setTimeout(() => {
                console.log("Resolved Observable");
                observer.next(mockData.cloths[category]);
                // Must have complete() for resolver to run properly
                observer.complete();
            }, 2000);
        });
    }
}