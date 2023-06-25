import _ from "lodash";

export default function Review(props: any) {
  const { customerReview, reviewCount } = props;
  return (
    <>
      {reviewCount === 0
        ? customerReview.map((review: any, i: number) => (
            <div
              key={i}
              id="read-review"
              className="border-2 border-stone-100 p-10  "
            >
              <div className="flex justify-start items-center">
                <p>Jane</p>
                <div className="  ml-2">
                  {_.range(5).map((star) => (
                    <i
                      key={star}
                      className={`text-amber-400 fas fa-star mr-2 `}
                    ></i>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-stone-500 my-2">Sun/May/28/2023/01:35:01</p>
                <p className="">Lorem ipsum, dolor sit amet</p>
                <p className="text-stone-500 my-2 ">
                  Consectetur adipisicing elit. Esse, necessitatibus?
                </p>
              </div>
            </div>
          ))
        : customerReview.map((review: any, i: number) => (
            <div
              key={i}
              id="read-review"
              className="border-2 border-stone-100 p-10  "
            >
              <div className="flex justify-start items-center">
                <p className="">{review.customerName}</p>
                <div className="  ml-2">
                  {_.range(review.countStar).map((star) => (
                    <i
                      key={star}
                      className={`text-amber-400 fas fa-star mr-2 `}
                    ></i>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-stone-500 my-2">{review.date}</p>
                <p className="">{review.customerTitleReview}</p>
                <p className="text-stone-500 my-2 ">
                  {review.customerContentReview}
                </p>
              </div>
            </div>
          ))}
    </>
  );
}
