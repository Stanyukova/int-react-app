import React from 'react';
import Search from "./Search";
import contactPic from "../assets/img/Group 100.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { selectCart } from '../redux/cart/selectors';

type HeaderProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};


export const Header: React.FC<HeaderProps> =({searchValue,setSearchValue})=> {
  const {items, totalPrice} = useSelector(selectCart)
  const isMounted = React.useRef(false);
  const totalCount = items.reduce((sum: number, item: any) =>sum +item.count, 0)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);
  return (
    <div className="header">
      <div className="nav__desktop">
        <div className="header__top">
          <div className="container">
           
            <div className="header__wrapper">
              <div className="header__contacts">
                <div className="location">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
                        stroke="#3F4E65"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.99992 1.66675C8.23181 1.66675 6.53612 2.36913 5.28587 3.61937C4.03563 4.86961 3.33325 6.5653 3.33325 8.33342C3.33325 9.91008 3.66825 10.9417 4.58325 12.0834L9.99992 18.3334L15.4166 12.0834C16.3316 10.9417 16.6666 9.91008 16.6666 8.33342C16.6666 6.5653 15.9642 4.86961 14.714 3.61937C13.4637 2.36913 11.768 1.66675 9.99992 1.66675V1.66675Z"
                        stroke="#3F4E65"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="adress">
                    <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                    (Рынок Восточный)
                  </div>
                </div>
                <div>
                  <svg
                    width="2"
                    height="39"
                    viewBox="0 0 2 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.05"
                      d="M1 0V39"
                      stroke="black"
                      stroke-dasharray="2 2"
                    />
                  </svg>
                </div>
                <div className="location">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.37508 3.33325H15.6251C16.3169 3.33321 16.9824 3.59788 17.4853 4.07298C17.9881 4.54808 18.2901 5.19758 18.3293 5.88825L18.3334 6.04158V13.9583C18.3335 14.65 18.0688 15.3156 17.5937 15.8184C17.1186 16.3213 16.4691 16.6233 15.7784 16.6624L15.6251 16.6666H4.37508C3.6833 16.6666 3.01772 16.402 2.51489 15.9269C2.01205 15.4518 1.71008 14.8023 1.67091 14.1116L1.66675 13.9583V6.04158C1.6667 5.3498 1.93138 4.68423 2.40647 4.18139C2.88157 3.67856 3.53108 3.37658 4.22175 3.33742L4.37508 3.33325H15.6251H4.37508ZM17.0834 7.81075L10.2917 11.3858C10.2151 11.4263 10.1308 11.4504 10.0443 11.4565C9.95776 11.4627 9.87091 11.4508 9.78925 11.4216L9.70925 11.3866L2.91675 7.81158V13.9583C2.91676 14.3242 3.05439 14.6768 3.30231 14.9461C3.55024 15.2153 3.89033 15.3815 4.25508 15.4116L4.37508 15.4166H15.6251C15.9912 15.4166 16.3439 15.2788 16.6132 15.0307C16.8824 14.7826 17.0485 14.4423 17.0784 14.0774L17.0834 13.9583V7.81075ZM15.6251 4.58325H4.37508C4.00909 4.58327 3.65648 4.72089 3.38726 4.96882C3.11803 5.21674 2.95186 5.55683 2.92175 5.92159L2.91675 6.04158V6.39908L10.0001 10.1266L17.0834 6.39825V6.04158C17.0834 5.67546 16.9456 5.32274 16.6975 5.0535C16.4494 4.78425 16.1091 4.61817 15.7442 4.58825L15.6251 4.58325Z"
                        fill="#3F4E65"
                      />
                    </svg>
                  </div>
                  <div className="adress">
                    <p>opt.sultan@mail.ru</p>
                    На связи в любое время
                  </div>
                </div>
              </div>
              <div className="header__menu">
                <ul>
                  <li>
                    <div>О компании</div>
                  </li>
                  <li>
                    <div>Доставка и оплата</div>
                  </li>
                  <li>
                    <div>Возврат</div>
                  </li>
                  <li>
                    <div>Контакты</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="header__bottom-wrapper">
              <div>
                <Link to="/int-react-app"> <svg
                  width="156"
                  height="66"
                  viewBox="0 0 156 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3926_138)">
                    <path
                      d="M48.5125 24.6743C48.4882 21.1069 47.3257 17.6401 45.194 14.7779C45.1655 14.7184 45.1258 14.665 45.077 14.6205C43.6523 12.7179 41.9207 11.0654 39.9529 9.73077C39.9015 9.68971 39.8473 9.65214 39.7908 9.61832V9.61832C36.7407 7.58887 33.3039 6.21058 29.6958 5.56979H29.6508C29.6272 5.56304 29.6023 5.56304 29.5787 5.56979V5.56979C28.6782 5.39885 27.7101 5.27739 26.7555 5.19642C26.6835 3.20815 26.2738 1.98009 25.792 1.21537C25.6447 0.932775 25.4408 0.6835 25.1929 0.483059C24.945 0.282618 24.6585 0.135304 24.3511 0.050293H24.2295H24.1485C23.8407 0.135495 23.5536 0.282842 23.305 0.48323C23.0564 0.683619 22.8516 0.932792 22.7031 1.21537C22.2168 1.98009 21.8026 3.21264 21.7396 5.20092C12.3785 5.99263 4.58433 11.1073 1.47748 18.0258C1.45977 18.0621 1.44472 18.0997 1.43245 18.1382C0.513654 20.2046 0.0381763 22.4403 0.0366211 24.7013C0.0366211 30.0589 2.64367 35.0476 7.385 38.7677C7.06004 40.8612 7.26277 43.0025 7.97485 44.998V44.998C6.85818 48.5966 5.86759 53.1895 7.74971 57.094C7.75053 57.106 7.75053 57.1181 7.74971 57.13C9.92001 61.5834 14.1705 62.789 18.2815 63.9496C20.2384 64.4245 22.1433 65.092 23.9684 65.9423L24.0314 65.9693H24.072C24.1139 65.9737 24.1561 65.9737 24.198 65.9693H24.2656C24.3473 65.9702 24.428 65.9501 24.4997 65.9108C26.3252 65.051 28.2317 64.3744 30.1911 63.8911C32.5325 63.2298 34.9234 62.5416 36.9451 61.2685L37.0037 61.228C38.611 60.2207 39.9003 58.7798 40.7229 57.0716C42.6275 53.1625 41.6234 48.6281 40.5698 45.1149C40.5623 45.0903 40.55 45.0674 40.5338 45.0474C41.6054 42.4474 41.3082 39.6494 41.1686 38.7137C45.9055 35.0116 48.5125 30.0319 48.5125 24.6743ZM47.4994 24.6743C47.4984 26.1297 47.2908 27.5777 46.8826 28.9748C46.1627 27.5083 45.2363 26.1526 44.1314 24.9487C42.0827 22.6996 38.458 19.9241 32.5775 18.8355C36.4353 17.3638 40.4247 16.2627 44.4916 15.5472C46.4217 18.2021 47.4733 21.3931 47.4994 24.6743V24.6743ZM43.8207 14.643C38.5349 15.5937 33.3909 17.2094 28.5116 19.4517C28.1964 16.9012 27.0617 14.8949 25.5578 14.1617C25.6074 13.9817 25.6479 13.8108 25.6884 13.6398C30.1621 12.1384 34.7844 11.122 39.4756 10.608C41.1112 11.7366 42.5747 13.0957 43.8207 14.643V14.643ZM37.9267 47.1122L37.6565 47.3506C36.692 48.1046 35.5573 48.6111 34.3516 48.8261H34.293H34.1985H34.1715C31.6545 49.2759 28.3945 48.9385 24.4277 47.7734H24.3736H24.1755H24.135C22.3281 48.3251 20.4742 48.7091 18.5967 48.9205H18.5156C14.999 49.2624 12.3515 48.6416 10.6089 47.0492C8.58722 45.2858 8.20899 42.5194 8.20899 40.648C9.06513 42.2584 10.3428 43.6064 11.9057 44.5481C14.4947 46.0776 17.7592 46.3475 21.618 45.4073C21.8674 45.886 22.2438 46.2869 22.706 46.5661C23.1682 46.8454 23.6984 46.9923 24.2386 46.9907V46.9907C24.7781 46.9925 25.3078 46.8456 25.7693 46.5663C26.2308 46.2869 26.6063 45.8859 26.8546 45.4073C30.7134 46.3654 33.9824 46.0776 36.5669 44.5481C38.132 43.609 39.4103 42.2604 40.2636 40.648C40.2996 42.5194 39.9214 45.2858 37.9267 47.1122ZM35.6754 60.8907C33.9288 61.7531 32.0927 62.4214 30.2001 62.8834C29.3368 62.0651 28.5954 61.1274 27.9983 60.099C27.0978 58.484 27.548 56.7072 28.2189 55.0248C28.3315 54.7369 28.4666 54.4265 28.6107 54.1026C29.16 52.8566 29.8174 51.3541 29.5922 49.9641C30.3304 50.0532 31.0731 50.0997 31.8166 50.1036C32.5629 50.1061 33.3082 50.0489 34.0454 49.9327C34.3291 50.7334 33.9238 52.1099 33.5591 53.3469C33.2491 54.2008 33.0626 55.0945 33.0053 56.001C33.0041 56.9743 33.2481 57.9323 33.7147 58.7868C34.1813 59.6413 34.8555 60.3648 35.6754 60.8907ZM24.2701 64.9392C23.5406 64.3994 21.0146 62.3167 20.5283 58.9114C20.0781 55.8165 21.4064 52.4517 24.4412 48.9025C25.7812 49.2857 27.1436 49.5861 28.5206 49.8022V49.8022C28.8808 50.9448 28.2459 52.3888 27.6831 53.6708C27.5345 54.0127 27.3949 54.3366 27.2779 54.6379C26.5349 56.5498 25.9991 58.592 27.1158 60.5758C27.6617 61.5216 28.3226 62.3964 29.0834 63.1803C27.4277 63.6203 25.8151 64.209 24.2656 64.9392H24.2701ZM36.0626 43.6934C33.6401 45.1239 30.4973 45.3398 26.742 44.3412C26.6759 44.3193 26.6059 44.3114 26.5365 44.318C26.4671 44.3245 26.3998 44.3453 26.3389 44.3791C26.278 44.413 26.2247 44.459 26.1825 44.5144C26.1403 44.5698 26.11 44.6334 26.0937 44.7011C25.9607 45.0788 25.7131 45.4057 25.3855 45.6363C25.0578 45.8669 24.6664 45.9897 24.2656 45.9876C23.8615 45.9907 23.4668 45.8663 23.1377 45.632C22.8086 45.3977 22.562 45.0656 22.433 44.6831C22.4158 44.618 22.3854 44.5573 22.3435 44.5046C22.3017 44.452 22.2493 44.4086 22.1898 44.3772C22.1255 44.3427 22.0547 44.3217 21.9819 44.3155C21.9091 44.3093 21.8358 44.318 21.7666 44.3412C18.0203 45.3353 14.891 45.1194 12.464 43.6934C10.5636 42.5211 9.14298 40.7112 8.45664 38.5878C8.86638 37.7601 10.8746 33.9994 15.3863 29.627C15.8681 29.3481 21.9917 26.0014 33.1539 29.654C37.634 34.0039 39.6783 37.8051 40.079 38.5923C39.3837 40.7102 37.9589 42.513 36.0581 43.6799L36.0626 43.6934ZM20.9516 20.8957C20.9516 18.3181 21.8927 16.051 23.1714 15.2188C23.3106 15.1202 23.4619 15.04 23.6217 14.9804C23.7807 14.9205 23.9475 14.8841 24.117 14.8724H24.3061C24.4782 14.8764 24.6485 14.9083 24.8104 14.9669C24.9691 15.0194 25.1204 15.092 25.2607 15.1828C26.3998 15.889 27.2824 17.7289 27.485 19.9196C27.52 20.2438 27.5366 20.5697 27.5345 20.8957C27.5345 20.9497 27.5345 21.0082 27.5345 21.0667C27.5268 21.9026 27.4118 22.7341 27.1923 23.5408C27.0965 23.8757 26.9807 24.2047 26.8456 24.5259C26.2377 25.9699 25.2877 26.919 24.234 26.919C23.1804 26.919 22.2304 25.9744 21.6225 24.5304C21.477 24.1953 21.3581 23.8494 21.2668 23.4958C21.0454 22.6471 20.9394 21.7726 20.9516 20.8957V20.8957ZM22.0187 26.9415C20.4954 27.0102 18.9848 27.2516 17.516 27.6613V27.6613C18.4841 26.8381 19.5693 25.9879 20.767 25.1332C21.0684 25.8083 21.4928 26.4215 22.0187 26.9415V26.9415ZM26.3368 27.0855C26.9341 26.5408 27.4085 25.8753 27.7281 25.1332C29.0789 26.1093 30.3307 27.1035 31.4473 28.0796C29.7716 27.6188 28.0631 27.2865 26.3368 27.0855ZM25.918 12.4883C26.3129 10.6926 26.5748 8.87035 26.7015 7.03625C27.6021 6.86082 28.5251 6.69437 29.4752 6.54143C32.5191 7.09115 35.4406 8.17879 38.1023 9.75327C33.9641 10.2817 29.8848 11.1974 25.918 12.4883V12.4883ZM23.4821 1.80465C23.6483 1.47941 23.9067 1.21029 24.225 1.03093C24.5423 1.21175 24.8003 1.48048 24.968 1.80465C25.3012 2.36695 25.6434 3.36559 25.7154 5.08846C25.7154 5.40335 25.7154 5.74073 25.7154 6.10509V6.20855C25.7154 6.53694 25.6884 6.87881 25.6659 7.25667C25.5027 9.14738 25.2017 11.0237 24.7654 12.8706C24.6933 13.199 24.6213 13.5319 24.5402 13.8783C24.436 13.862 24.3305 13.8545 24.225 13.8558C24.1016 13.8579 23.9783 13.8669 23.8558 13.8828C23.8063 13.6713 23.7523 13.4644 23.7072 13.253C23.293 11.4973 22.9922 9.71673 22.8067 7.92243C22.7707 7.56256 22.7437 7.22069 22.7301 6.8968C22.7166 6.57292 22.7031 6.357 22.6986 6.10509C22.6986 5.74073 22.6986 5.40335 22.6986 5.09296C22.8067 3.36559 23.1534 2.36695 23.4821 1.80465V1.80465ZM21.717 6.17706C21.717 6.48745 21.7396 6.81583 21.7621 7.15321C12.5226 9.66329 6.80415 13.37 3.89542 15.7001C7.46154 10.5315 14.031 6.85182 21.717 6.17706ZM2.32398 18.5206C2.67969 18.1382 4.67888 16.069 8.62774 13.7118C12.7664 11.2886 17.213 9.43357 21.8476 8.19683C22.0538 10.0254 22.3696 11.84 22.7932 13.6309C17.795 15.5443 13.1804 18.3369 9.16806 21.8764C5.11565 25.547 3.05342 28.9658 2.22042 30.6122C1.41211 28.6967 1.00472 26.6362 1.0233 24.5575C1.04189 22.4788 1.48606 20.4259 2.32849 18.5251L2.32398 18.5206ZM2.77425 31.7997C3.40462 30.3783 7.92082 21.1431 21.7216 15.1558C20.6364 16.4243 19.943 18.4981 19.943 20.8912C19.9323 21.9782 20.0841 23.0608 20.3933 24.103C12.3785 29.744 8.7268 35.8483 7.7227 37.7421C5.67764 36.1253 3.99103 34.1018 2.76975 31.7997H2.77425ZM8.62774 46.2935C8.98647 46.8681 9.41946 47.3929 9.91551 47.8544C10.7579 48.6155 11.7546 49.1863 12.8377 49.5278V49.5278C11.7778 49.863 10.8036 50.4248 9.98305 51.1742C8.98057 52.1385 8.28382 53.3758 7.97936 54.7324C7.30846 51.9524 7.86229 48.9205 8.60523 46.2935H8.62774ZM8.7268 56.7702C9.01497 49.9686 15.3863 50.0721 15.6654 50.0811C15.713 50.0828 15.7604 50.0751 15.805 50.0586V50.0586C16.1427 50.0586 16.4894 50.0856 16.8406 50.0586C14.7514 51.705 13.4861 53.6123 13.0809 55.749C12.7522 57.6744 13.0438 59.6544 13.9139 61.4035C11.7526 60.4813 9.8975 59.1453 8.70429 56.7702H8.7268ZM15.4133 61.9928C15.0396 61.4215 13.5267 58.8844 14.094 55.947C14.5443 53.6663 16.1067 51.6555 18.7678 49.9686C20.1536 49.8197 21.5263 49.5671 22.8742 49.2129C20.2132 52.6452 19.083 55.9605 19.5332 59.0553C19.8086 60.8538 20.5787 62.5404 21.7576 63.9271C20.6994 63.5582 19.6188 63.2523 18.5562 62.9509C17.4935 62.6495 16.4084 62.3436 15.4133 61.9928ZM36.6795 60.2699C35.8828 59.866 35.2136 59.2495 34.7463 58.4888C34.279 57.7282 34.0317 56.853 34.0319 55.9605C34.097 55.1602 34.2681 54.3721 34.5407 53.6168C34.9549 52.2313 35.3737 50.8053 35.063 49.7167C35.899 49.5136 36.7002 49.1877 37.4404 48.7496V48.7496C37.4404 52.6317 39.5792 54.3006 40.4707 54.8314C40.3187 55.4659 40.0998 56.0827 39.8178 56.6712C39.1081 58.132 38.0178 59.3751 36.6615 60.2699H36.6795ZM40.6823 53.7518C39.8043 53.1085 38.2554 51.4666 38.4895 47.9804L38.6336 47.8544C39.113 47.4149 39.5323 46.9143 39.8809 46.3654C40.5022 48.6416 41.011 51.2507 40.6643 53.7518H40.6823ZM40.7949 37.7556C39.8088 35.8933 36.1707 29.8115 28.1154 24.148C28.441 23.0949 28.602 21.9979 28.5926 20.8957C28.5926 20.7878 28.5926 20.6753 28.5926 20.5718C29.2996 20.23 30.029 19.8971 30.781 19.5867C37.3414 20.3694 41.2452 23.2799 43.3659 25.5965C44.6711 26.992 45.7021 28.6202 46.4053 30.3963C45.1936 33.292 43.2551 35.8267 40.7769 37.7556H40.7949Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M17.5289 35.9868C16.0295 35.9868 14.6877 36.6436 14.1834 37.6242C14.1234 37.7437 14.1129 37.8819 14.1542 38.0091C14.1955 38.1362 14.2853 38.242 14.4041 38.3035C14.4755 38.3387 14.554 38.3572 14.6337 38.3574C14.7268 38.3577 14.8181 38.3322 14.8976 38.2837C14.9771 38.2353 15.0416 38.1658 15.084 38.083C15.4127 37.4443 16.4348 36.9944 17.5289 36.9944C18.6231 36.9944 19.6452 37.4443 19.9784 38.083C20.0084 38.1422 20.0499 38.1949 20.1003 38.238C20.1508 38.2812 20.2093 38.3139 20.2725 38.3344C20.3357 38.3549 20.4023 38.3627 20.4685 38.3574C20.5347 38.3521 20.5992 38.3338 20.6583 38.3035C20.7782 38.242 20.8689 38.1354 20.9102 38.0072C20.9516 37.879 20.9403 37.7396 20.8789 37.6197C20.3656 36.6436 19.0148 35.9868 17.5289 35.9868Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M30.9784 35.9868C29.479 35.9868 28.1327 36.6436 27.6329 37.6242C27.6019 37.6831 27.5831 37.7476 27.5775 37.8139C27.5718 37.8802 27.5795 37.947 27.6001 38.0102C27.6206 38.0735 27.6536 38.132 27.6972 38.1824C27.7407 38.2328 27.7938 38.2739 27.8535 38.3035C27.9249 38.3387 28.0035 38.3572 28.0831 38.3574C28.1762 38.3577 28.2676 38.3322 28.347 38.2837C28.4265 38.2353 28.491 38.1658 28.5334 38.083C28.8621 37.4443 29.8842 36.9944 30.9784 36.9944C32.0725 36.9944 33.0946 37.4443 33.4278 38.083C33.4579 38.1422 33.4993 38.1949 33.5498 38.238C33.6002 38.2812 33.6587 38.3139 33.7219 38.3344C33.7851 38.3549 33.8517 38.3627 33.9179 38.3574C33.9841 38.3521 34.0486 38.3338 34.1077 38.3035C34.2268 38.2411 34.3167 38.1345 34.3579 38.0066C34.3992 37.8788 34.3886 37.7398 34.3284 37.6197C33.8195 36.6436 32.4732 35.9868 30.9784 35.9868Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M63.8707 29.0774C67.1621 29.0774 70.7282 30.8767 71.3406 35.1097H67.3467C66.7794 33.4993 65.5727 32.7705 63.8707 32.7705C61.4887 32.7705 59.9218 34.5699 59.9218 37.1924C59.9218 39.5316 61.4662 41.5693 63.8707 41.5963C65.5997 41.5963 66.982 40.7327 67.4143 39.0323H71.4081C70.8183 43.5306 67.2567 45.2895 63.8707 45.2895C59.8182 45.312 55.7433 42.5905 55.7208 37.1924C55.6983 31.7944 59.8317 29.0774 63.8707 29.0774Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M77.7659 44.6959L80.2514 39.5767L74.9067 29.8513V29.2395H79.4454L82.4442 35.0874H82.5568L85.2809 29.2395H89.7071V29.8513L82.147 45.1457H77.7659V44.6959Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M94.7049 45.1455H90.729V44.5562L97.8793 29.0684H99.6128L106.817 44.5427V45.1455H102.841L98.7573 35.8474L94.7049 45.1455Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M108.667 32.8875V29.2573H120.469V32.8875H116.588V45.1456H112.571V32.8875H108.667Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M133.5 43.1347H127.237L126.305 45.1455H122.333V44.5562L129.484 29.0684H131.231L138.404 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.181L130.348 35.4875Z"
                      fill="#3F4E65"
                    />
                    <path
                      d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z"
                      fill="#3F4E65"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3926_138">
                      <rect width="156" height="66" fill="white" />
                    </clipPath>
                  </defs>
                </svg></Link>
               
              </div>
              <Link to="/int-react-app">
              <div className="catalogw">
                  Каталог
                  <div>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z"
                        stroke="white"
                      />
                      <path
                        d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z"
                        stroke="white"
                      />
                      <path
                        d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z"
                        stroke="white"
                      />
                      <path
                        d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z"
                        stroke="white"
                      />
                    </svg>
                  </div>
                
              </div>
              </Link>
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
              <div className="contacts">
                <div className="contacts-main">
                  <p>
                    <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                  </p>
                  <div className="worktime adress">
                    время работы: 9:00-20:00
                  </div>
                  <div className="adress" >
                    Заказать звонок
                  </div>
                </div>
                <div className="contacts-main-pic">
                  <img width="70" src={contactPic} alt="" />
                </div>
              </div>
              <div>
                <svg
                  width="2"
                  height="49"
                  viewBox="0 0 2 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    d="M1 0V49"
                    stroke="#3F4E65"
                    stroke-dasharray="2 2"
                  />
                </svg>
              </div>
              <div className="price catalog">
                <div className='catalogw'>
                  Прайс-лист
                  <div>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  width="2"
                  height="49"
                  viewBox="0 0 2 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    d="M1 0V49"
                    stroke="#3F4E65"
                    stroke-dasharray="2 2"
                  />
                </svg>
              </div>
              <div className="header_cart">
                <div className="cart">
                  <Link to="/cart">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.6514 13.7862C41.3916 13.4233 41.043 13.2418 40.6055 13.2418H12.7559L12 11.274C11.8086 10.6289 11.5488 10.0778 11.2207 9.6208C10.8926 9.16381 10.5439 8.84123 10.1748 8.65306C9.80566 8.46489 9.48438 8.3372 9.21094 8.27C8.9375 8.20279 8.66406 8.16919 8.39062 8.16919H2.77148C2.41602 8.16919 2.11523 8.29016 1.86914 8.53209C1.62305 8.77403 1.5 9.08317 1.5 9.45951C1.5 9.67457 1.55469 9.8829 1.66406 10.0845C1.77344 10.2861 1.93066 10.4407 2.13574 10.5482C2.34082 10.6557 2.55273 10.7095 2.77148 10.7095H8.39062C8.5 10.7095 8.60254 10.723 8.69824 10.7498C8.79395 10.7767 8.92383 10.891 9.08789 11.0926C9.25195 11.2942 9.38867 11.5966 9.49805 11.9998L15.3809 28.1531C15.4355 28.3144 15.5244 28.4689 15.6475 28.6168C15.7705 28.7646 15.9141 28.8789 16.0781 28.9595C16.2422 29.0402 16.4199 29.0805 16.6113 29.0805H34.3301C34.6035 29.0805 34.8564 28.9998 35.0889 28.8385C35.3213 28.6773 35.4785 28.4756 35.5605 28.2337L41.8359 14.9757C41.9727 14.5456 41.9111 14.1491 41.6514 13.7862ZM33.4277 26.4998H17.6367L13.4531 15.8225H38.7188L33.4277 26.4998ZM31.0625 30.4798C30.1602 30.4798 29.3877 30.7957 28.7451 31.4274C28.1025 32.0591 27.7812 32.8186 27.7812 33.7057C27.7812 34.5928 28.1025 35.3522 28.7451 35.9839C29.3877 36.6156 30.1602 36.9315 31.0625 36.9315C31.9648 36.9315 32.7373 36.6156 33.3799 35.9839C34.0225 35.3522 34.3438 34.5928 34.3438 33.7057C34.3438 32.8186 34.0225 32.0591 33.3799 31.4274C32.7373 30.7957 31.9648 30.4798 31.0625 30.4798ZM19.25 30.4798C18.6484 30.4798 18.0947 30.6277 17.5889 30.9234C17.083 31.2191 16.6865 31.6089 16.3994 32.0927C16.1123 32.5766 15.9688 33.1143 15.9688 33.7057C15.9688 34.5928 16.29 35.3522 16.9326 35.9839C17.5752 36.6156 18.3477 36.9315 19.25 36.9315C20.1523 36.9315 20.9248 36.6156 21.5674 35.9839C22.21 35.3522 22.5312 34.5928 22.5312 33.7057C22.5312 33.4906 22.5107 33.2755 22.4697 33.0605C22.4287 32.8454 22.3672 32.6438 22.2852 32.4557C22.2031 32.2675 22.1006 32.086 21.9775 31.9113C21.8545 31.7366 21.7178 31.5753 21.5674 31.4274C21.417 31.2796 21.2529 31.1452 21.0752 31.0242C20.8975 30.9032 20.7129 30.8024 20.5215 30.7218C20.3301 30.6411 20.125 30.5806 19.9062 30.5403C19.6875 30.5 19.4688 30.4798 19.25 30.4798Z"
                        fill="#3F4E65"
                      />
                    </svg>
                    <i>{totalCount}</i>
                  </Link>
                </div>
                <div className="cart-content">
                  <div>Корзина</div>
                  <p>{totalPrice} ₸ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
