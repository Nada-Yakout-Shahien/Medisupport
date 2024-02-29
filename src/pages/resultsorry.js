import { Helmet } from "react-helmet-async";
import "./results.css";
import Layout from "../components/Layout";

const Resultsorry = () => {
  return (
    <Layout>
      <Helmet>
        <title>Result Sorry ♥</title>
        <meta name="description" content="Result Sorry" />
      </Helmet>
      <div className="res">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M200 375C153.587 375 109.075 356.563 76.2563 323.744C43.4374 290.925 25 246.413 25 200C25 153.587 43.4374 109.075 76.2563 76.2563C109.075 43.4374 153.587 25 200 25C246.413 25 290.925 43.4374 323.744 76.2563C356.563 109.075 375 153.587 375 200C375 246.413 356.563 290.925 323.744 323.744C290.925 356.563 246.413 375 200 375ZM200 400C253.043 400 303.914 378.929 341.421 341.421C378.929 303.914 400 253.043 400 200C400 146.957 378.929 96.0859 341.421 58.5786C303.914 21.0714 253.043 0 200 0C146.957 0 96.0859 21.0714 58.5786 58.5786C21.0714 96.0859 0 146.957 0 200C0 253.043 21.0714 303.914 58.5786 341.421C96.0859 378.929 146.957 400 200 400Z"
            fill="var(--Red)"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="100"
            y="115"
            width="200"
            height="150"
            viewBox="0 0 200 150"
            fill="none"
          >
            <path
              d="M0 137.5C0 140.815 1.31696 143.995 3.66117 146.339C6.00537 148.683 9.18479 150 12.5 150H187.5C190.815 150 193.995 148.683 196.339 146.339C198.683 143.995 200 140.815 200 137.5C200 134.185 198.683 131.005 196.339 128.661C193.995 126.317 190.815 125 187.5 125H12.5C9.18479 125 6.00537 126.317 3.66117 128.661C1.31696 131.005 0 134.185 0 137.5ZM75 37.5C75 16.8 63.8 0 50 0C36.2 0 25 16.8 25 37.5C25 58.2 36.2 75 50 75C63.8 75 75 58.2 75 37.5ZM175 37.5C175 16.8 163.8 0 150 0C136.2 0 125 16.8 125 37.5C125 58.2 136.2 75 150 75C163.8 75 175 58.2 175 37.5Z"
              fill="#BE0202"
            />
          </svg>
        </svg>
        <h3>Sorry, You may have a heart disease</h3>
        <div className="para">
          <p>
            {" "}
            <span>"Important Note: </span>
            This prediction is based on machine learning algorithms and is not a
            substitute for professional medical advice. For accurate diagnosis
            and personalized care, we strongly recommend consulting with a
            healthcare professional or your primary care physician."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Resultsorry;
