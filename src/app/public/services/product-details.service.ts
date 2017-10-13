import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class ProductDetailsService {

    constructor() {
    }

    getProducts(category) {
        let mockData = {
            cloths: {
                man: [
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
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
                        id:5,
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

    getProductDetails(productId) {
        let mockData =
        {
            fullName: 'Funky shirt ',
            status: 'In Stock',
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
        };
        return new Observable(observer => {
            setTimeout(() => {
                console.log("Resolved Observable");
                observer.next(mockData);
                // Must have complete() for resolver to run properly
                observer.complete();
            }, 2000);
        });
    }
}