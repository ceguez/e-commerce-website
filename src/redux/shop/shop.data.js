const SHOP_DATA = {
  electronics: {
    id: 1,
    title: 'Electronics',
    routeName: 'electronics',
    items: [
      {
        id: 1,
        name: 'Laptop',
        imageUrl: 'https://previews.123rf.com/images/choreograph/choreograph1602/choreograph160200145/52484131-laptop-with-dark-screen-on-table-in-office.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Drone',
        imageUrl: 'https://previews.123rf.com/images/aleksminyaylo/aleksminyaylo1906/aleksminyaylo190600007/124932011-the-girl-controls-the-drone-on-a-background-of-blue-sky.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Television',
        imageUrl: 'https://us.123rf.com/450wm/lekstuntkite/lekstuntkite1601/lekstuntkite160100045/50212658-television-and-nature-on-white-background.jpg?ver=6',
        price: 35
      },
      {
        id: 4,
        name: 'Speakers',
        imageUrl: 'https://previews.123rf.com/images/vladru/vladru1601/vladru160100015/51916965-speakers-box-modern-on-a-white-background-done-in-3d-.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Virtual Reality Headset ',
        imageUrl: 'https://previews.123rf.com/images/iaremenko/iaremenko1601/iaremenko160100112/52160913-virtual-reality-headset-on-white-background.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Digital Camera',
        imageUrl: 'https://us.123rf.com/450wm/olegdudko/olegdudko1809/olegdudko180902163/108334138-digital-camera.jpg?ver=6',
        price: 14
      }
    ]
  },
  womens: {
    id: 2,
    title: 'womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens: {
    id: 3,
    title: 'mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  },
  sports: {
    id: 4,
    title: 'sports',
    routeName: 'sports',
    
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
    ]

  },
  home: {
    id: 5,
    title: 'Home',
    routeName: 'home',
    items: [
      {
        id: 30,
        name: 'Green Armchair',
        imageUrl: 'https://us.123rf.com/450wm/bialasiewicz/bialasiewicz1702/bialasiewicz170200446/71340460-white-room-with-green-armchair-small-table-and-plant.jpg?ver=6',
        price: 325
      },
      {
        id: 31,
        name: 'Hammock',
        imageUrl: 'https://us.123rf.com/450wm/bialasiewicz/bialasiewicz1703/bialasiewicz170300268/73258403-room-interior-with-hammock-and-stylish-decorations.jpg?ver=6',
        price: 20
      },
      {
        id: 32,
        name: 'Desk',
        imageUrl: 'https://us.123rf.com/450wm/poligonchik/poligonchik1701/poligonchik170100007/68877237-interior-of-home-office-in-scandinavian-style-mock-up-interior-with-poster-3d-render-.jpg?ver=6',
        price: 25
      },
      {
        id: 33,
        name: 'Pillow',
        imageUrl: 'https://us.123rf.com/450wm/oljgaa/oljgaa1607/oljgaa160700002/60777591-sweet-home-pillow-home-decor.jpg?ver=6',
        price: 25
      },
      {
        id: 34,
        name: 'Sofa ',
        imageUrl: 'https://us.123rf.com/450wm/satura86/satura861707/satura86170701526/82856672-sofa-in-interior.jpg?ver=6',
        price: 40
      },
      {
        id: 35,
        name: 'Carpet',
        imageUrl: 'https://us.123rf.com/450wm/belchonock/belchonock1907/belchonock190721401/127578199-living-room-with-comfortable-sofa-and-stylish-decor-idea-for-interior-design.jpg?ver=6',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
