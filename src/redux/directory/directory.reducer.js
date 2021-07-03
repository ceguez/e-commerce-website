const INITIAL_STATE = {
  sections: [
    {
      title: 'electronics',
      imageUrl: 'https://342ovh8vk5j1u8yyn49cljj1-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/consumer20electronics201.png',
      id: 1,
      linkUrl: 'shop/electronics'
    },
    {
      title: 'womens',
      imageUrl: 'https://st4.depositphotos.com/2939989/22379/i/1600/depositphotos_223799554-stock-photo-womens-clothes-set-isolated-female.jpg',
      id: 2,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://previews.123rf.com/images/cookelma/cookelma0803/cookelma080300026/2687368-men-s-clothes-and-accessories-on-a-white-background.jpg',
      id: 3,
      linkUrl: 'shop/mens'
    },
    {
      title: 'sports',
      imageUrl: 'https://olinblog.wustl.edu/wp-content/uploads/2015/09/Sportss1.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/sports'
    },
    {
      title: 'home',
      imageUrl: 'https://previews.123rf.com/images/followtheflow/followtheflow2007/followtheflow200700080/154408648-stylish-interior-design-of-living-room-with-modern-mint-sofa-wooden-console-cube-coffee-table-lamp-p.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/home'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
