import React from "react";

const Footer:React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__content">
            <div>
              <svg
                width="156"
                height="66"
                viewBox="0 0 156 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3926_4)">
                  <path
                    d="M48.5125 24.6743C48.4882 21.1069 47.3257 17.6401 45.194 14.7779C45.1655 14.7184 45.1258 14.665 45.077 14.6205C43.6523 12.7179 41.9207 11.0654 39.9529 9.73077C39.9015 9.68971 39.8473 9.65214 39.7908 9.61832C36.7407 7.58887 33.3039 6.21058 29.6958 5.56979H29.6508C29.6272 5.56304 29.6023 5.56304 29.5787 5.56979C28.6782 5.39885 27.7101 5.27739 26.7555 5.19642C26.6835 3.20815 26.2738 1.98009 25.792 1.21537C25.6447 0.932775 25.4408 0.6835 25.1929 0.483059C24.945 0.282618 24.6585 0.135304 24.3511 0.050293H24.2295H24.1485C23.8407 0.135495 23.5536 0.282842 23.305 0.48323C23.0564 0.683619 22.8516 0.932792 22.7031 1.21537C22.2168 1.98009 21.8026 3.21264 21.7396 5.20092C12.3785 5.99263 4.58433 11.1073 1.47748 18.0258C1.45977 18.0621 1.44472 18.0997 1.43245 18.1382C0.513654 20.2046 0.0381763 22.4403 0.0366211 24.7013C0.0366211 30.0589 2.64367 35.0476 7.385 38.7677C7.06004 40.8612 7.26277 43.0025 7.97485 44.998C6.85818 48.5966 5.86759 53.1895 7.74971 57.0941C7.75053 57.106 7.75053 57.1181 7.74971 57.13C9.92001 61.5834 14.1705 62.789 18.2815 63.9496C20.2384 64.4245 22.1433 65.092 23.9684 65.9423L24.0314 65.9693H24.072C24.1139 65.9737 24.1561 65.9737 24.198 65.9693H24.2656C24.3473 65.9702 24.428 65.9501 24.4997 65.9109C26.3252 65.051 28.2317 64.3744 30.1911 63.8911C32.5325 63.2298 34.9234 62.5416 36.9451 61.2685L37.0037 61.228C38.611 60.2207 39.9003 58.7798 40.7229 57.0716C42.6275 53.1625 41.6234 48.6281 40.5698 45.1149C40.5623 45.0903 40.55 45.0674 40.5338 45.0474C41.6054 42.4474 41.3082 39.6494 41.1686 38.7137C45.9055 35.0116 48.5125 30.0319 48.5125 24.6743ZM47.4994 24.6743C47.4984 26.1297 47.2908 27.5777 46.8826 28.9748C46.1627 27.5083 45.2363 26.1526 44.1314 24.9487C42.0827 22.6996 38.458 19.9241 32.5775 18.8355C36.4353 17.3638 40.4247 16.2627 44.4916 15.5472C46.4217 18.2021 47.4733 21.3931 47.4994 24.6743ZM43.8207 14.643C38.5349 15.5937 33.3909 17.2094 28.5116 19.4517C28.1964 16.9012 27.0617 14.8949 25.5578 14.1617C25.6074 13.9817 25.6479 13.8108 25.6884 13.6398C30.1621 12.1384 34.7844 11.122 39.4756 10.608C41.1112 11.7366 42.5747 13.0957 43.8207 14.643ZM37.9267 47.1122L37.6565 47.3506C36.692 48.1046 35.5573 48.6111 34.3516 48.8261H34.293H34.1985H34.1715C31.6545 49.2759 28.3945 48.9385 24.4277 47.7734H24.3736H24.1755H24.135C22.3281 48.3251 20.4742 48.7091 18.5967 48.9205H18.5156C14.999 49.2624 12.3515 48.6416 10.6089 47.0492C8.58722 45.2859 8.20899 42.5194 8.20899 40.648C9.06513 42.2584 10.3428 43.6064 11.9057 44.5481C14.4947 46.0776 17.7592 46.3475 21.618 45.4073C21.8674 45.886 22.2438 46.2869 22.706 46.5661C23.1682 46.8454 23.6984 46.9923 24.2386 46.9907C24.7781 46.9925 25.3078 46.8456 25.7693 46.5663C26.2308 46.2869 26.6063 45.8859 26.8546 45.4073C30.7134 46.3654 33.9824 46.0776 36.5669 44.5481C38.132 43.609 39.4103 42.2604 40.2636 40.648C40.2996 42.5194 39.9214 45.2858 37.9267 47.1122ZM35.6754 60.8907C33.9288 61.7531 32.0927 62.4214 30.2001 62.8834C29.3368 62.0651 28.5954 61.1274 27.9983 60.099C27.0978 58.484 27.548 56.7072 28.2189 55.0248C28.3315 54.7369 28.4666 54.4265 28.6107 54.1026C29.16 52.8566 29.8174 51.3541 29.5922 49.9641C30.3304 50.0532 31.0731 50.0997 31.8166 50.1036C32.5629 50.1061 33.3082 50.0489 34.0454 49.9327C34.3291 50.7334 33.9238 52.1099 33.5591 53.3469C33.2491 54.2008 33.0626 55.0945 33.0053 56.0009C33.0041 56.9743 33.2481 57.9323 33.7147 58.7868C34.1813 59.6413 34.8555 60.3648 35.6754 60.8907ZM24.2701 64.9392C23.5406 64.3994 21.0146 62.3167 20.5283 58.9114C20.0781 55.8165 21.4064 52.4517 24.4412 48.9025C25.7812 49.2857 27.1436 49.5861 28.5206 49.8022C28.8808 50.9448 28.2459 52.3888 27.6831 53.6708C27.5345 54.0127 27.3949 54.3366 27.2779 54.6379C26.5349 56.5498 25.9991 58.592 27.1158 60.5758C27.6617 61.5216 28.3226 62.3965 29.0834 63.1803C27.4277 63.6203 25.8151 64.209 24.2656 64.9392H24.2701ZM36.0626 43.6934C33.6401 45.1239 30.4973 45.3398 26.742 44.3412C26.6759 44.3193 26.6059 44.3114 26.5365 44.318C26.4671 44.3245 26.3998 44.3453 26.3389 44.3791C26.278 44.413 26.2247 44.459 26.1825 44.5144C26.1403 44.5698 26.11 44.6334 26.0937 44.7011C25.9607 45.0788 25.7131 45.4057 25.3855 45.6363C25.0578 45.8669 24.6664 45.9897 24.2656 45.9876C23.8615 45.9907 23.4668 45.8663 23.1377 45.632C22.8086 45.3977 22.562 45.0656 22.433 44.6831C22.4158 44.618 22.3854 44.5573 22.3435 44.5046C22.3017 44.452 22.2493 44.4086 22.1898 44.3772C22.1255 44.3427 22.0547 44.3217 21.9819 44.3155C21.9091 44.3093 21.8358 44.318 21.7666 44.3412C18.0203 45.3353 14.891 45.1194 12.464 43.6934C10.5636 42.5211 9.14298 40.7112 8.45664 38.5878C8.86638 37.7601 10.8746 33.9994 15.3863 29.627C15.8681 29.3481 21.9917 26.0014 33.1539 29.654C37.634 34.0039 39.6783 37.8051 40.079 38.5923C39.3837 40.7102 37.9589 42.513 36.0581 43.6799L36.0626 43.6934ZM20.9516 20.8957C20.9516 18.3181 21.8927 16.051 23.1714 15.2188C23.3106 15.1202 23.4619 15.04 23.6217 14.9804C23.7807 14.9205 23.9475 14.8841 24.117 14.8724H24.3061C24.4782 14.8764 24.6485 14.9083 24.8104 14.9669C24.9691 15.0194 25.1204 15.092 25.2607 15.1828C26.3998 15.889 27.2824 17.7289 27.485 19.9196C27.52 20.2438 27.5366 20.5697 27.5345 20.8957C27.5345 20.9497 27.5345 21.0082 27.5345 21.0667C27.5268 21.9026 27.4118 22.7341 27.1923 23.5408C27.0965 23.8757 26.9807 24.2047 26.8456 24.5259C26.2377 25.9699 25.2877 26.919 24.234 26.919C23.1804 26.919 22.2304 25.9744 21.6225 24.5304C21.477 24.1953 21.3581 23.8494 21.2668 23.4958C21.0454 22.6471 20.9394 21.7726 20.9516 20.8957ZM22.0187 26.9415C20.4954 27.0102 18.9848 27.2516 17.516 27.6613C18.4841 26.8381 19.5693 25.9879 20.767 25.1332C21.0684 25.8083 21.4928 26.4215 22.0187 26.9415ZM26.3368 27.0855C26.9341 26.5408 27.4085 25.8753 27.7281 25.1332C29.0789 26.1093 30.3307 27.1035 31.4473 28.0796C29.7716 27.6188 28.0631 27.2865 26.3368 27.0855ZM25.918 12.4883C26.3129 10.6926 26.5748 8.87035 26.7015 7.03625C27.6021 6.86082 28.5251 6.69437 29.4752 6.54143C32.5191 7.09115 35.4406 8.17879 38.1023 9.75327C33.9641 10.2817 29.8848 11.1974 25.918 12.4883ZM23.4821 1.80465C23.6483 1.47941 23.9067 1.21029 24.225 1.03093C24.5423 1.21175 24.8003 1.48048 24.968 1.80465C25.3012 2.36695 25.6434 3.36559 25.7154 5.08846C25.7154 5.40335 25.7154 5.74073 25.7154 6.10509V6.20855C25.7154 6.53694 25.6884 6.87881 25.6659 7.25667C25.5027 9.14738 25.2017 11.0237 24.7654 12.8706C24.6933 13.199 24.6213 13.5319 24.5402 13.8783C24.436 13.862 24.3305 13.8545 24.225 13.8558C24.1016 13.8579 23.9783 13.8669 23.8558 13.8828C23.8063 13.6713 23.7523 13.4644 23.7072 13.253C23.293 11.4973 22.9922 9.71673 22.8067 7.92243C22.7707 7.56256 22.7437 7.22069 22.7301 6.8968C22.7166 6.57292 22.7031 6.357 22.6986 6.10509C22.6986 5.74073 22.6986 5.40335 22.6986 5.09296C22.8067 3.36559 23.1534 2.36695 23.4821 1.80465ZM21.717 6.17706C21.717 6.48745 21.7396 6.81583 21.7621 7.15321C12.5226 9.66329 6.80415 13.37 3.89542 15.7001C7.46154 10.5315 14.031 6.85182 21.717 6.17706ZM2.32398 18.5206C2.67969 18.1382 4.67888 16.069 8.62774 13.7118C12.7664 11.2886 17.213 9.43357 21.8476 8.19683C22.0538 10.0254 22.3696 11.84 22.7932 13.6309C17.795 15.5443 13.1804 18.3369 9.16807 21.8764C5.11565 25.547 3.05342 28.9658 2.22042 30.6122C1.41211 28.6967 1.00472 26.6362 1.0233 24.5575C1.04189 22.4788 1.48606 20.4259 2.32849 18.5251L2.32398 18.5206ZM2.77425 31.7997C3.40462 30.3783 7.92082 21.1431 21.7216 15.1558C20.6364 16.4243 19.943 18.4981 19.943 20.8912C19.9323 21.9782 20.0841 23.0608 20.3933 24.103C12.3785 29.744 8.7268 35.8483 7.7227 37.7421C5.67764 36.1253 3.99103 34.1018 2.76975 31.7997H2.77425ZM8.62774 46.2935C8.98647 46.8681 9.41946 47.3929 9.91551 47.8544C10.7579 48.6155 11.7546 49.1863 12.8377 49.5278C11.7778 49.863 10.8036 50.4248 9.98305 51.1742C8.98057 52.1385 8.28382 53.3758 7.97936 54.7324C7.30846 51.9524 7.86229 48.9205 8.60523 46.2935H8.62774ZM8.7268 56.7702C9.01497 49.9686 15.3863 50.0721 15.6654 50.0811C15.713 50.0828 15.7604 50.0751 15.805 50.0586C16.1427 50.0586 16.4894 50.0856 16.8406 50.0586C14.7514 51.705 13.4861 53.6123 13.0809 55.749C12.7522 57.6744 13.0438 59.6544 13.9139 61.4035C11.7526 60.4813 9.8975 59.1453 8.70429 56.7702H8.7268ZM15.4133 61.9928C15.0396 61.4215 13.5267 58.8844 14.094 55.947C14.5443 53.6663 16.1067 51.6555 18.7678 49.9686C20.1536 49.8197 21.5263 49.5671 22.8742 49.2129C20.2132 52.6452 19.083 55.9605 19.5332 59.0553C19.8086 60.8538 20.5787 62.5404 21.7576 63.9271C20.6994 63.5582 19.6188 63.2523 18.5562 62.9509C17.4935 62.6495 16.4084 62.3436 15.4133 61.9928ZM36.6795 60.2699C35.8828 59.866 35.2136 59.2495 34.7463 58.4888C34.279 57.7282 34.0317 56.853 34.0319 55.9605C34.097 55.1602 34.2681 54.3721 34.5407 53.6168C34.9549 52.2313 35.3737 50.8053 35.063 49.7167C35.899 49.5136 36.7002 49.1877 37.4404 48.7496C37.4404 52.6317 39.5792 54.3006 40.4707 54.8314C40.3187 55.4659 40.0998 56.0827 39.8178 56.6712C39.1081 58.132 38.0178 59.3751 36.6615 60.2699H36.6795ZM40.6824 53.7518C39.8043 53.1085 38.2554 51.4666 38.4895 47.9804L38.6336 47.8544C39.113 47.4149 39.5323 46.9143 39.8809 46.3654C40.5022 48.6416 41.011 51.2507 40.6643 53.7518H40.6824ZM40.7949 37.7556C39.8088 35.8933 36.1707 29.8115 28.1154 24.148C28.441 23.0949 28.602 21.9979 28.5926 20.8957C28.5926 20.7878 28.5926 20.6753 28.5926 20.5718C29.2996 20.23 30.029 19.8971 30.781 19.5867C37.3414 20.3694 41.2452 23.2799 43.3659 25.5965C44.6711 26.992 45.7021 28.6202 46.4053 30.3963C45.1936 33.292 43.2551 35.8267 40.7769 37.7556H40.7949Z"
                    fill="white"
                  />
                  <path
                    d="M17.5289 35.9868C16.0295 35.9868 14.6877 36.6436 14.1834 37.6242C14.1234 37.7437 14.1129 37.8819 14.1542 38.0091C14.1955 38.1362 14.2853 38.242 14.4041 38.3035C14.4755 38.3387 14.554 38.3572 14.6337 38.3574C14.7268 38.3577 14.8181 38.3322 14.8976 38.2837C14.9771 38.2353 15.0416 38.1658 15.084 38.083C15.4127 37.4443 16.4348 36.9944 17.5289 36.9944C18.6231 36.9944 19.6452 37.4443 19.9784 38.083C20.0084 38.1422 20.0499 38.1949 20.1003 38.238C20.1508 38.2812 20.2093 38.3139 20.2725 38.3344C20.3357 38.3549 20.4023 38.3627 20.4685 38.3574C20.5347 38.3521 20.5992 38.3338 20.6583 38.3035C20.7782 38.242 20.8689 38.1354 20.9102 38.0072C20.9516 37.879 20.9403 37.7396 20.8789 37.6197C20.3656 36.6436 19.0148 35.9868 17.5289 35.9868Z"
                    fill="white"
                  />
                  <path
                    d="M30.9784 35.9868C29.479 35.9868 28.1327 36.6436 27.6329 37.6242C27.6019 37.6831 27.5831 37.7476 27.5775 37.8139C27.5718 37.8802 27.5795 37.947 27.6001 38.0102C27.6206 38.0735 27.6536 38.132 27.6972 38.1824C27.7407 38.2328 27.7938 38.2739 27.8535 38.3035C27.9249 38.3387 28.0035 38.3572 28.0831 38.3574C28.1762 38.3577 28.2676 38.3322 28.347 38.2837C28.4265 38.2353 28.491 38.1658 28.5334 38.083C28.8621 37.4443 29.8842 36.9944 30.9784 36.9944C32.0725 36.9944 33.0946 37.4443 33.4278 38.083C33.4579 38.1422 33.4993 38.1949 33.5498 38.238C33.6002 38.2812 33.6587 38.3139 33.7219 38.3344C33.7851 38.3549 33.8517 38.3627 33.9179 38.3574C33.9841 38.3521 34.0486 38.3338 34.1077 38.3035C34.2268 38.2411 34.3167 38.1345 34.3579 38.0066C34.3992 37.8788 34.3886 37.7398 34.3284 37.6197C33.8195 36.6436 32.4732 35.9868 30.9784 35.9868Z"
                    fill="white"
                  />
                  <path
                    d="M63.8707 29.0776C67.1621 29.0776 70.7282 30.877 71.3406 35.1099H67.3467C66.7794 33.4995 65.5727 32.7708 63.8707 32.7708C61.4887 32.7708 59.9218 34.5701 59.9218 37.1927C59.9218 39.5318 61.4662 41.5696 63.8707 41.5966C65.5997 41.5966 66.982 40.7329 67.4143 39.0325H71.4081C70.8183 43.5309 67.2567 45.2897 63.8707 45.2897C59.8182 45.3122 55.7433 42.5907 55.7208 37.1927C55.6983 31.7947 59.8317 29.0776 63.8707 29.0776Z"
                    fill="white"
                  />
                  <path
                    d="M77.7659 44.6956L80.2514 39.5765L74.9067 29.851V29.2393H79.4454L82.4442 35.0871H82.5568L85.2809 29.2393H89.7071V29.851L82.147 45.1455H77.7659V44.6956Z"
                    fill="white"
                  />
                  <path
                    d="M94.7049 45.1455H90.729V44.5562L97.8793 29.0684H99.6128L106.817 44.5427V45.1455H102.841L98.7573 35.8474L94.7049 45.1455Z"
                    fill="white"
                  />
                  <path
                    d="M108.667 32.8875V29.2573H120.469V32.8875H116.588V45.1456H112.571V32.8875H108.667Z"
                    fill="white"
                  />
                  <path
                    d="M133.5 43.1347H127.237L126.305 45.1455H122.333V44.5562L129.484 29.0684H131.231L138.404 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.181L130.348 35.4875Z"
                    fill="white"
                  />
                  <path
                    d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3926_4">
                    <rect width="156" height="66" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="info">
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </div>
            <div>Подпишись на скидки и акции</div>

            <div className="inputEmail">
              <input placeholder="Введите ваш E-mail..." />
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39" height="39" rx="19.5" fill="#FFC85E" />
                <path
                  d="M16 24.8571L21 19.5L16 14.1429L17 12L24 19.5L17 27L16 24.8571Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="footer__content">
            <div className="content-footer">Меню сайта:</div>
            <div>О компании</div>
            <div>Доставка и оплата</div>
            <div>Возврат</div>
            <div>Контакты</div>
          </div>

          <div className="footer__content">
            <div className="content-footer">Категории:</div>
            <div>Бытовая химия</div>
            <div>Косметика и гигиена</div>
            <div>Товары для дома</div>
            <div>Товары для детей и мам</div>
            <div>Посуда</div>
          </div>

          <div className="footer__content">
            <div className="content-footer">Скачать прайс-лист:</div>
            <div className="price catalog">
              <div>
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
            <div>Связь в мессенджерах:</div>
            <div className="net">
              <div>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="39" height="39" rx="19.5" fill="#00E676" />
                  <path
                    d="M27.6784 11.3568C25.5476 9.18112 22.6022 8 19.594 8C13.2017 8 8.06271 13.1594 8.12533 19.4378C8.12533 21.427 8.68936 23.3541 9.62947 25.0946L8 31L14.079 29.4459C15.7711 30.3784 17.6511 30.8136 19.5314 30.8136C25.861 30.8136 31 25.654 31 19.3758C31 16.3298 29.8092 13.4703 27.6785 11.3568H27.6784ZM19.594 28.8866C17.9019 28.8866 16.2098 28.4515 14.7684 27.5812L14.3924 27.3947L10.7575 28.3271L11.6976 24.7839L11.4469 24.4109C8.68936 19.9974 10.0055 14.154 14.5177 11.4189C19.0299 8.68377 24.8583 9.98921 27.6158 14.4649C30.3733 18.9405 29.0572 24.7216 24.545 27.4568C23.1035 28.3892 21.3488 28.8865 19.594 28.8865V28.8866ZM25.1089 21.9866L24.4196 21.6758C24.4196 21.6758 23.4169 21.2407 22.7902 20.9298C22.7275 20.9298 22.6649 20.8676 22.6022 20.8676C22.4141 20.8676 22.2888 20.9298 22.1635 20.992C22.1635 20.992 22.1008 21.0541 21.2234 22.0488C21.1607 22.1731 21.0354 22.2353 20.9101 22.2353H20.8474C20.7847 22.2353 20.6594 22.1731 20.5967 22.111L20.2833 21.9866C19.594 21.6758 18.9673 21.3028 18.4659 20.8055C18.3406 20.6812 18.1525 20.5569 18.0272 20.4326C17.5885 19.9974 17.1498 19.5001 16.8365 18.9406L16.7738 18.8163C16.7112 18.7541 16.7112 18.692 16.6485 18.5677C16.6485 18.4434 16.6485 18.3191 16.7112 18.2569C16.7112 18.2569 16.9619 17.946 17.1498 17.7596C17.2752 17.6352 17.3379 17.4488 17.4632 17.3245C17.5885 17.1379 17.6512 16.8893 17.5885 16.7028C17.5259 16.392 16.7738 14.7136 16.5859 14.3406C16.4605 14.1541 16.3352 14.092 16.1472 14.0298H15.4578C15.3324 14.0298 15.2072 14.092 15.0817 14.092L15.019 14.1541C14.8937 14.2163 14.7684 14.3406 14.643 14.4028C14.5177 14.5272 14.455 14.6514 14.3297 14.7758C13.891 15.3353 13.6403 16.019 13.6403 16.7028C13.6403 17.2001 13.7656 17.6974 13.9537 18.1325L14.0164 18.3191C14.5804 19.5001 15.3324 20.5569 16.3352 21.4893L16.5859 21.7379C16.7738 21.9244 16.9619 22.0488 17.0872 22.2352C18.4033 23.3542 19.9073 24.1623 21.5994 24.5974C21.7875 24.6595 22.0381 24.6595 22.2262 24.7217H22.8528C23.1662 24.7217 23.5422 24.5974 23.7929 24.4731C23.9809 24.3488 24.1062 24.3488 24.2315 24.2245L24.357 24.1001C24.4823 23.9758 24.6076 23.9136 24.733 23.7893C24.8583 23.665 24.9836 23.5407 25.0463 23.4163C25.1717 23.1677 25.2343 22.8568 25.297 22.5461V22.111C25.297 22.111 25.2343 22.0488 25.1089 21.9866Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_20)">
                    <path
                      d="M19.5 0C8.73036 0 0 8.73036 0 19.5C0 30.2696 8.73036 39 19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73036 30.2696 0 19.5 0Z"
                      fill="#40B3E0"
                    />
                    <path
                      d="M28.9884 11.2169L25.5054 28.7774C25.5054 28.7774 25.0183 29.9953 23.6788 29.4107L15.6414 23.2487L12.7188 21.8362L7.79905 20.1799C7.79905 20.1799 7.04404 19.9121 6.97091 19.3275C6.89779 18.743 7.82343 18.4264 7.82343 18.4264L27.3807 10.7544C27.3807 10.7544 28.9882 10.0481 28.9882 11.2172"
                      fill="white"
                    />
                    <path
                      d="M15.0237 28.5799C15.0237 28.5799 14.7891 28.558 14.4966 27.6324C14.2046 26.7069 12.7188 21.8358 12.7188 21.8358L24.5312 14.3344C24.5312 14.3344 25.2132 13.9204 25.1888 14.3344C25.1888 14.3344 25.3106 14.4075 24.9451 14.7485C24.5799 15.0896 15.6658 23.1024 15.6658 23.1024"
                      fill="#D2E5F1"
                    />
                    <path
                      d="M18.7233 25.6112L15.5443 28.5097C15.5443 28.5097 15.2957 28.6983 15.0239 28.5801L15.6327 23.1963"
                      fill="#B5CFE4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_20">
                      <rect width="39" height="39" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="content-footer">Контакты:</div>
            <div>
              <strong>+7 (777) 490-00-91</strong>
            </div>
            <div>время работы: 9:00-20:00</div>
            <div>Заказать звонок</div>
            <div>
              <strong>opt.sultan@mail.ru </strong>
              <br></br>На связи в любое время
            </div>
            <div className="net">
              <div>
                <svg
                  width="61"
                  height="39"
                  viewBox="0 0 61 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="60.9375" height="39" rx="3" fill="#00579F" />
                  <path
                    d="M27.3815 26.6927H23.6299L25.9764 13.2432H29.7279L27.3815 26.6927Z"
                    fill="white"
                  />
                  <path
                    d="M40.9809 13.5726C40.2409 13.3005 39.0673 13 37.616 13C33.9112 13 31.3022 14.8313 31.2862 17.4496C31.2554 19.3813 33.1541 20.4542 34.5742 21.0983C36.0257 21.7565 36.5191 22.1861 36.5191 22.7728C36.5043 23.6738 35.3462 24.0891 34.2661 24.0891C32.7682 24.0891 31.9657 23.875 30.746 23.3737L30.252 23.1588L29.7271 26.178C30.607 26.5495 32.2281 26.8793 33.9111 26.8937C37.8476 26.8937 40.4104 25.0908 40.4408 22.3006C40.4557 20.7695 39.4532 19.5964 37.2917 18.6378C35.9795 18.0224 35.1759 17.6074 35.1759 16.9778C35.1913 16.4054 35.8556 15.8191 37.3368 15.8191C38.5564 15.7903 39.4525 16.0621 40.1314 16.334L40.4707 16.4769L40.9809 13.5726Z"
                    fill="white"
                  />
                  <path
                    d="M45.9675 21.928C46.2764 21.1553 47.4653 18.1649 47.4653 18.1649C47.4497 18.1936 47.7737 17.378 47.9589 16.8773L48.2211 18.0362C48.2211 18.0362 48.9315 21.2556 49.0858 21.928C48.4995 21.928 46.7085 21.928 45.9675 21.928ZM50.5984 13.2432H47.6965C46.8016 13.2432 46.1218 13.4862 45.7357 14.3591L40.1631 26.6925H44.0996C44.0996 26.6925 44.7476 25.0325 44.8869 24.675C45.3188 24.675 49.1482 24.675 49.7037 24.675C49.8114 25.1472 50.1514 26.6925 50.1514 26.6925H53.625L50.5984 13.2432Z"
                    fill="white"
                  />
                  <path
                    d="M20.4959 13.2432L16.8218 22.4144L16.4203 20.5544C15.741 18.4082 13.6107 16.0763 11.2334 14.9168L14.5987 26.6784H18.566L24.4629 13.2432H20.4959Z"
                    fill="white"
                  />
                  <path
                    d="M13.4103 13.2432H7.37425L7.3125 13.5149C12.021 14.631 15.1393 17.3213 16.4205 20.555L15.1083 14.3737C14.8923 13.5147 14.2284 13.2715 13.4103 13.2432Z"
                    fill="#FAA61A"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="61"
                  height="39"
                  viewBox="0 0 61 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3926_70)">
                    <rect width="60.9375" height="39" rx="3" fill="#0F3560" />
                    <path
                      d="M35.5658 29.12H24.8633V9.88574H35.5658V29.12Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M25.5488 19.5013C25.5488 15.5995 27.3757 12.124 30.2205 9.88416C28.1402 8.2463 25.5146 7.26873 22.6612 7.26873C15.906 7.26873 10.4302 12.7454 10.4302 19.5013C10.4302 26.2573 15.906 31.7339 22.6612 31.7339C25.5146 31.7339 28.1402 30.7563 30.2205 29.1185C27.3757 26.8787 25.5488 23.4031 25.5488 19.5013Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M50.0001 19.5013C50.0001 26.2573 44.5243 31.7339 37.7691 31.7339C34.9157 31.7339 32.2901 30.7563 30.209 29.1185C33.0546 26.8787 34.8815 23.4031 34.8815 19.5013C34.8815 15.5995 33.0546 12.124 30.209 9.88416C32.2901 8.2463 34.9157 7.26873 37.7691 7.26873C44.5243 7.26873 50.0001 12.7454 50.0001 19.5013Z"
                      fill="#F79E1B"
                    />
                    <path
                      d="M19.6338 19.5789C19.6338 19.0446 19.9839 18.6056 20.5561 18.6056C21.1028 18.6056 21.4718 19.0257 21.4718 19.5789C21.4718 20.1321 21.1028 20.5522 20.5561 20.5522C19.9839 20.5522 19.6338 20.1132 19.6338 19.5789ZM22.095 19.5789V18.0589H21.434V18.428C21.2243 18.1543 20.9062 17.9825 20.4738 17.9825C19.6214 17.9825 18.9531 18.6508 18.9531 19.5789C18.9531 20.5078 19.6214 21.1753 20.4738 21.1753C20.9062 21.1753 21.2243 21.0035 21.434 20.7298V21.0989H22.095V19.5789ZM44.4314 19.5789C44.4314 19.0446 44.7815 18.6056 45.3537 18.6056C45.9011 18.6056 46.2695 19.0257 46.2695 19.5789C46.2695 20.1321 45.9011 20.5522 45.3537 20.5522C44.7815 20.5522 44.4314 20.1132 44.4314 19.5789ZM46.8933 19.5789V16.8382H46.2316V18.428C46.022 18.1543 45.7039 17.9825 45.2715 17.9825C44.419 17.9825 43.7508 18.6508 43.7508 19.5789C43.7508 20.5078 44.419 21.1753 45.2715 21.1753C45.7039 21.1753 46.022 21.0035 46.2316 20.7298V21.0989H46.8933V19.5789ZM30.2997 18.5743C30.7255 18.5743 30.9993 18.8415 31.0691 19.3117H29.4917C29.5623 18.8728 29.8287 18.5743 30.2997 18.5743ZM30.3128 17.9825C29.4218 17.9825 28.7987 18.6311 28.7987 19.5789C28.7987 20.5456 29.4473 21.1753 30.3572 21.1753C30.8151 21.1753 31.2344 21.061 31.6035 20.7494L31.2795 20.2595C31.0247 20.4626 30.7001 20.5776 30.3951 20.5776C29.9692 20.5776 29.5812 20.3804 29.4858 19.833H31.7432C31.7498 19.7507 31.7563 19.6677 31.7563 19.5789C31.7498 18.6311 31.1645 17.9825 30.3128 17.9825ZM38.294 19.5789C38.294 19.0446 38.6442 18.6056 39.2164 18.6056C39.7631 18.6056 40.1321 19.0257 40.1321 19.5789C40.1321 20.1321 39.7631 20.5522 39.2164 20.5522C38.6442 20.5522 38.294 20.1132 38.294 19.5789ZM40.7552 19.5789V18.0589H40.0943V18.428C39.8839 18.1543 39.5665 17.9825 39.1341 17.9825C38.2817 17.9825 37.6134 18.6508 37.6134 19.5789C37.6134 20.5078 38.2817 21.1753 39.1341 21.1753C39.5665 21.1753 39.8839 21.0035 40.0943 20.7298V21.0989H40.7552V19.5789ZM34.5611 19.5789C34.5611 20.5012 35.2032 21.1753 36.183 21.1753C36.6409 21.1753 36.9459 21.0734 37.2764 20.8128L36.959 20.2785C36.7108 20.4568 36.4501 20.5522 36.1633 20.5522C35.6356 20.5456 35.2476 20.1642 35.2476 19.5789C35.2476 18.9936 35.6356 18.6122 36.1633 18.6056C36.4501 18.6056 36.7108 18.701 36.959 18.8793L37.2764 18.345C36.9459 18.0844 36.6409 17.9825 36.183 17.9825C35.2032 17.9825 34.5611 18.6566 34.5611 19.5789ZM43.0832 17.9825C42.7018 17.9825 42.4536 18.1608 42.2818 18.428V18.0589H41.6266V21.0989H42.2883V19.3947C42.2883 18.8917 42.5045 18.6122 42.9369 18.6122C43.0709 18.6122 43.2106 18.6311 43.3504 18.6886L43.5542 18.0655C43.4079 18.008 43.2172 17.9825 43.0832 17.9825ZM25.3642 18.3006C25.0461 18.091 24.6078 17.9825 24.1245 17.9825C23.3543 17.9825 22.8586 18.3516 22.8586 18.9558C22.8586 19.4515 23.2277 19.7572 23.9076 19.8526L24.2198 19.897C24.5824 19.948 24.7534 20.0433 24.7534 20.2151C24.7534 20.4503 24.5118 20.5842 24.0604 20.5842C23.6025 20.5842 23.2721 20.4379 23.0493 20.2661L22.7377 20.7807C23.1003 21.0479 23.5581 21.1753 24.0539 21.1753C24.9318 21.1753 25.4406 20.7618 25.4406 20.1831C25.4406 19.6488 25.0402 19.3692 24.3785 19.2739L24.067 19.2288C23.7809 19.1909 23.5516 19.1341 23.5516 18.9303C23.5516 18.7075 23.7678 18.5743 24.1303 18.5743C24.5183 18.5743 24.8939 18.7206 25.0781 18.8349L25.3642 18.3006ZM33.8929 17.9825C33.5114 17.9825 33.2632 18.1608 33.0921 18.428V18.0589H32.437V21.0989H33.0979V19.3947C33.0979 18.8917 33.3141 18.6122 33.7465 18.6122C33.8805 18.6122 34.0202 18.6311 34.16 18.6886L34.3638 18.0655C34.2175 18.008 34.0268 17.9825 33.8929 17.9825ZM28.252 18.0589H27.171V17.1366H26.5027V18.0589H25.8861V18.6631H26.5027V20.0499C26.5027 20.7553 26.7764 21.1753 27.5582 21.1753C27.845 21.1753 28.1755 21.0865 28.3852 20.9402L28.1945 20.3738C27.9972 20.4881 27.781 20.5456 27.6092 20.5456C27.2787 20.5456 27.171 20.3418 27.171 20.0368V18.6631H28.252V18.0589ZM18.3686 21.0989V19.1909C18.3686 18.4724 17.9107 17.9891 17.1726 17.9825C16.7846 17.9759 16.3842 18.0968 16.1039 18.5234C15.8943 18.1863 15.5638 17.9825 15.0994 17.9825C14.7747 17.9825 14.4573 18.0779 14.2091 18.4338V18.0589H13.5474V21.0989H14.2149V19.4137C14.2149 18.8859 14.5075 18.6056 14.9596 18.6056C15.3985 18.6056 15.6206 18.8917 15.6206 19.4071V21.0989H16.2888V19.4137C16.2888 18.8859 16.5938 18.6056 17.0328 18.6056C17.4841 18.6056 17.7003 18.8917 17.7003 19.4071V21.0989H18.3686Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3926_70">
                      <rect width="61" height="39" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
