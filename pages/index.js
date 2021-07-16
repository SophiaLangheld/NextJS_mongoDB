import Head from 'next/head'
//import { useRouter } from 'next/router'
//import { connectToDatabase } from '../util/mongodb'
import Link from "next/link";

export default function Home({ users }) {
  return (
    <div className="container">
      <ul>
        {users.map((user) => (
          <li key = {user.id}>
            <Link href="/detail/[id]" as= {`/detail/${user.id}`}><span>{user.name}</span></Link>
          </li>
          ))}
      </ul>
      <input placeholder="schreib something"/>
      <button>Click</button>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

/*export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}*/

export async function getServerSideProps(){
  return {
    props:{
      users: [0,1,2,3,4].map((e) =>({id:e, name:`walker-${e}`})),
    },
  };
}
