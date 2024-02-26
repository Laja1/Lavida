import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
  type Homes {
    id: ID
    title: String
    price: String
    image: String
     slug: String
     kitchen: String
     bathroom: String
     design: String
     design2: String
     coverimage:String
    available:String,
    description: String
  }

  type Query {
    home: [Homes]
    description(slug: String) : Homes
  }
`;

const home = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverimage:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 19000,
    design:
      "https://images.unsplash.com/photo-1552566626-2d907dab0dff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design2:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bathroom:
      "https://cdn.pixabay.com/photo/2019/03/03/18/13/bathroom-4032529_1280.jpg",
    kitchen:
      "https://cdn.pixabay.com/photo/2019/03/08/20/17/kitchen-4043098_1280.jpg",
    available: "Yes",
    slug: "The Royal Room",
    title: "The Royal Room",
    description:
      "For an extended stay or for extra space, choose one of our Three Bedroom Suites(Royal Room). These spacious surroundings include a living area separate from the bedroom for ultimate comfort and privacy. Our Suites also offer a free deep sleep pillow spray and turndown service every evening, so you can enjoy a good night’s sleep.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design2:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bathroom:
      "https://cdn.pixabay.com/photo/2018/07/26/10/36/bathroom-3563272_1280.jpg",
    coverimage:
      "https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10000,
    kitchen:
      "https://cdn.pixabay.com/photo/2017/05/03/04/20/kitchen-2280062_1280.jpg",
    available: "Yes",
    slug: "Standard Room",
    title: "Standard Room",
    description:
      "With our Standard Room, you will have everything you need for a comfortable stay and a good night’s sleep. Enjoy the large bed, in-room coffee and tea facilities, and free Wi-Fi. Other services include a magnifying mirror and a hairdryer. Choose between double or twin beds.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverimage:
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 16000,
    design:
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design2:
      "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg",
    bathroom:
      "https://cdn.pixabay.com/photo/2020/01/30/16/24/bathroom-4805846_1280.jpg",
    available: "Yes",
    kitchen:
      "https://cdn.pixabay.com/photo/2016/09/02/22/36/kitchen-1640439_1280.jpg",
    slug: "Executive Room",
    title: "Executive Room",
    description:
      "Our Executive Room allows guests to relax in a large lounge area with natural light, enjoy an extensive selection of drinks from the minibar, and browse a range of daily newspapers and magazines. Free Wi-Fi, a coffee machine, and delicious snacks ensure a comfortable stay.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design:
      "https://images.unsplash.com/photo-1546967900-1bea5f16b69d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design2:
      "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
    bathroom:
      "https://images.unsplash.com/photo-1571781418606-70265b9cce90?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kitchen:
      "https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
    coverimage:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 190000,
    available: "Yes",
    slug: "Superior Room",
    title: "Superior Room",
    description:
      "For extra space, book one of our Superior Rooms. With the in-room espresso machine, there’s no reason to wait for your first cup of coffee. Everything you need is already in the room. Whether you prefer twin, queen, or king beds, we guarantee an exceptional level of comfort.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverimage:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design:
      "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design2:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bathroom:
      "https://cdn.pixabay.com/photo/2018/07/14/10/15/bathroom-3537248_1280.jpg",
    kitchen:
      "https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_1280.jpg",
    price: 190000,
    available: "Yes",
    slug: "The King's Suite",
    title: "The King's Suite",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    design:
      "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    design2:
      "ihttps://cdn.pixabay.com/photo/2015/09/23/09/51/swimming-pool-953286_1280.jpg",
    bathroom:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kitchen:
      "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg",
    coverimage:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 190000,
    available: "Yes",
    slug: "Deluxe Suite",
    title: "Deluxe Suite",
    description:
      "For an extended stay or for extra space, choose one of our Four Bedroom Royal Suites. These spacious surroundings include a living area separate from the bedroom for ultimate comfort and privacy. Our Suites also offer a free deep sleep pillow spray and turndown service every evening, so you can enjoy a good night’s sleep.",
  },
];

const resolvers = {
  Query: {
    home: () => home,
    description: (parent, args, ctx) => {
      const descriptionData = home.find((item) => {
        return item.slug === args.slug;
      });
      return descriptionData;
    },
  },
};

async function main() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main().catch((error) => console.error("Error starting server:", error));
