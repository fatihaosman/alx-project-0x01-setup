// import UserCard from "@/components/common/UserCard";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { UserProps } from "@/interfaces";

// const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="p-4 flex-1">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-2xl font-semibold">Users</h1>
//           <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           {posts.map((user, key) => (
//             <UserCard {...user} key={key} />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };




// // Fetch users from JSONPlaceholder
// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json(); // rename here too

//   return {
//     props: {
//       posts, // matches the prop in the component
//     },
//   };
// }


// export default Users;







import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";



const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
const [usersList, setUsersList] = useState<UserProps[]>(posts);
const handleAddUser = (newUser: UserData) => {
  setUsersList([...usersList, { ...newUser, id: usersList.length + 1 }]);
};


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-1">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user, key) => (
            <UserCard {...user} key={key} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};




// Fetch users from JSONPlaceholder
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // rename here too

  return {
    props: {
      posts, // matches the prop in the component
    },
  };
}


export default Users;

