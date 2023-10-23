import React from "react";

const Post = () => {
  return (
    <div className="container">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-3xl font-medium">
            How to use Next.js with Tailwind CSS
          </h1>
          <p className="text-gray-600 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quas.
          </p>
          <div className="flex gap-2 items-center ">
            {/* Author name and image */}

            <img
              src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
              alt="author"
              className="rounded-full w-10 h-10"
            />
            <p className="">Author Name</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?size=626&ext=jpg&uid=R95932037&ga=GA1.1.563406451.1695574672&semt=ais"
            alt="blog"
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          explicabo doloremque aspernatur reprehenderit officia magnam suscipit
          cum velit iure quae unde illo, quia ex ducimus. Vel laudantium quas
          ipsum, fugit dolore reiciendis maxime. Tempora porro magnam iure
          architecto maiores voluptate quod saepe aliquid dolores? Omnis eius
          maxime tempora minima in?
        </p>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          consectetur repellendus tempora id ullam nihil nemo nobis, atque
          beatae voluptate, obcaecati odio, sint aperiam dolor possimus pariatur
          corporis. Atque corrupti numquam excepturi consequatur possimus.
          Officiis iusto deleniti corporis cupiditate dignissimos. Perferendis
          consequatur autem natus. Dolorem voluptas, quis possimus beatae hic et
          obcaecati voluptatem rem iste, consequuntur nisi aperiam distinctio
          autem soluta laboriosam ab eligendi, est aliquam atque! Voluptates
          ipsum blanditiis at eos harum consequatur unde ipsa distinctio rem
          numquam rerum, nemo sapiente officia itaque atque totam dolorem
          nesciunt? Earum pariatur nostrum velit ex quibusdam molestiae veniam
          ab omnis? Amet harum cum deleniti impedit quidem dolor ducimus.
          Aliquam a suscipit necessitatibus possimus quis laboriosam labore
          natus sed, dicta nam quibusdam inventore. Voluptate, minima! Ut nihil,
          officia cumque beatae tempora nulla ducimus nesciunt necessitatibus
          ipsam consectetur, corporis doloribus ad voluptate velit architecto
          quisquam ea hic dolorum veniam fuga dolorem, expedita ratione
          voluptatem! Iusto doloremque eaque earum vero similique? Aliquam
          accusamus iste illo eveniet esse veritatis impedit nihil sunt, ut ea
          ipsam? Aspernatur itaque eveniet placeat perferendis libero voluptatem
          dignissimos, quos in commodi laborum illo sint officiis minima est aut
          laboriosam doloribus! Assumenda facere voluptate cumque molestias
          eligendi tempore quos voluptatum, atque culpa?
        </p>
      </div>
    </div>
  );
};

export default Post;
