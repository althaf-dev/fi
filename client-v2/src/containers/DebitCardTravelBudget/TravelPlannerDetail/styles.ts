import styled from 'styled-components';

const BudgetCard = styled.main`
    background-color: #181b1b;
    display: flex;
    max-width: 480px;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh; /* Ensure the main container takes full viewport height */
    overflow: hidden; /* Hide content that overflows the container */
`;

const BudgetContent = styled.section`
    border-radius: 20px 20px 0 0;
    background-color: #fff;
    height: auto; /* Allow the content to grow */
    display: flex;
    width: 100%;
    padding-bottom: 42px; /* Ensure enough space at the bottom */
    flex-direction: column;
    overflow: auto; /* Allow scrolling if content overflows */
    
    &::-webkit-scrollbar {
        display: none !important; /* Hide scrollbar for Chrome, Safari, and Edge */
    }
`;

const PageDivider = styled.hr`
    width: 90%;
    height: 0; 
    border-top: 0.1px solid #e6e9ed;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    background: transparent;
`;

const ExpenseWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  aspect-ratio: 2.06;
  width: 100%;
  font-family: Gilroy, sans-serif;
  padding: 80px 70px 0;
`;

const BackgroundImage = styled.img`
  border-radius: 20px 20px 0 0;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ExpenseTitle = styled.h2`
  position: relative;
  font-feature-settings: "liga" off, "clig" off;
  border-radius: 20px;
  border: 1px solid #e4f1f5;
  background-color: #fff;
  align-self: center;
  z-index: 11;
  max-width: 100%;
  overflow: hidden;
  font-size: 10px;
  color: #0d3641;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  padding: 6px 10px;
  bottom: -45px;
`;

const ExpenseCard = styled.div`
  position: relative;
  border-radius: 20px;
  border: 1px solid #e4f1f5;
  background-color: #e4f1f5;
  z-index: 10;
  display: flex;
  bottom: -32px;
  flex-direction: column;
  overflow: hidden;
`;

const ExpenseAmount = styled.div`
  align-self: center;
  display: flex;
  width: 152px;
  max-width: 100%;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TotalAmount = styled.span`
  color: #0d3641;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;

const DailyAmount = styled.span`
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 4px;
  font-size: 16px;
  color: #6294a6;
  font-weight: 600;
  line-height: 1;
`;

const ExchangeRate = styled.div`
  font-feature-settings: "liga" off, "clig" off;
  background-color: #fff;
  overflow: hidden;
  font-size: 12px;
  color: #929599;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 10px;
`;

const ExpensesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 31px 20px 0;
`;

const ExpensesTitle = styled.h3`
  font-feature-settings: "liga" off, "clig" off;
  align-self: stretch;
  width: 100%;
  color: #929599;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font: 600 12px/1 Gilroy, sans-serif;
`;

const ExpensesList = styled.ul`
  overflow-x: auto;
  display: flex;
  margin-top: 12px;
  width: 100%;
  align-items: center;
  gap: 16px;
  justify-content: start;
  padding: 0;
  list-style-type: none;
    
    scrollbar-width: none; /* Hide scrollbar for Firefox */

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
    }
`;

const ExpenseImage = styled.img`
    width: 100%; 
    height: 76px;
    aspect-ratio: 1;
    object-position: center;
`;

const ExpenseItem = styled.li`
  border-radius: 12px;
  border: 1px solid #eff2f6;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-width: 152px;
    min-height: 140px;
  overflow: hidden;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between amount and baht amount */
  margin-top: 12px; /* Push details to the bottom */
  margin-left: 12px;
`;

const ForeignCountryAmount = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #6a6d70;
  white-space: nowrap;
  line-height: 1;
    padding-top: 4px;
`;

const DailyExpenseAmount = styled.span`
  color: #313234;
  font-size: 16px;
  line-height: 1;
`;

const OffersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: 31px 20px 0;
`;

const OffersTitle = styled.h3`
  color: #929599;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font: 600 12px/1 Gilroy, sans-serif;
`;

const OffersList = styled.ul`
  align-self: start;
  display: flex;
  margin-top: 12px;
  align-items: center;
  gap: 16px;
  justify-content: start;
  padding: 0;
  list-style-type: none;
  overflow: auto hidden;
  width: 100%;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  padding-bottom: 10px;

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
    }
`;

const OfferItem = styled.li`
    border-radius: 16px;
    background: #f6f9fd;
    box-shadow: 0px 4.643px 0px 0px #d9dee3;
    display: flex;
    flex-direction: column;
    width: 156px;
    height: 148px;
    padding: 3px 3px 21px;
    z-index: 1;
    min-width: 152px;
`;

const OfferHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Align items to the start of the flex container */
    width: 100%; 
    height: 76px;
    min-height: 76px;
    font-size: 16px;
    white-space: nowrap;
    line-height: 1;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 16px;
    padding-left: 20px;
`;

const OfferIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: top;
  width: 30px;
  height: 100%;
  padding-top: 15px;
`;

const OfferImage = styled(OfferIcon)`
    height: 100%;
    width: 100%;
    object-position: right;
    padding: 0;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
`;

const OfferText = styled.p`
  align-self: center;
  margin-top: 12px;
  margin-left: 10px;
  max-width: 100%;
  color: #282828;
  font: 600 14px/18px Gilroy, sans-serif;
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: 2.6em; /* Fallback for non-webkit, line-height * 2 */
  line-height: 1.3em;
  -webkit-line-clamp: 2; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = styled.section`
    border-radius: 20px;
    background-color: #edf5eb;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px); /* Full width minus left and right padding */
    margin: 0 auto;
    font-family: Gilroy, sans-serif;
    padding: 28px 20px; /* 28px top and bottom, 20px left and right */
    box-sizing: border-box; /* Include padding in the element's width */
    margin-top: 24px;
    position: relative; /* Added to allow absolute positioning of BigCardImage */
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CardHeader = styled.header`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const CardTitle = styled.h2`
    color: #37522a;
    font-feature-settings: "liga" off, "clig" off;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
`;

const TotalSavings = styled.p`
    color: #313234;
    font-feature-settings: "liga" off, "clig" off;
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
    margin-top: 8px;
`;

const SavingsBreakdown = styled.div`
    display: flex;
    margin-top: 28px;
    width: 100%;
    align-items: center;
    justify-content: space-between; /* Space the cards evenly */
    font-weight: 600;
    line-height: 1.2;
`;

const DetailCard = styled.article`
    border-radius: 12px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 48%; /* Each card takes up 48% of the screen width */
    height: 66px;
    padding: 13px 12px;
    position: relative; /* Position relative for absolute positioning of the image */
`;

const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const DetailTitle = styled.h3`
    color: #37522a;
    font-feature-settings: "liga" off, "clig" off;
    font-size: 10px;
`;

const DetailAmount = styled.p`
    color: #313234;
    font-feature-settings: "liga" off, "clig" off;
    font-size: 20px;
    margin-top: 4px;
`;

const CardImage = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: auto;
    object-fit: contain;
`;

const BigCardImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
`;

const ButtonWrapper = styled.footer`
    background-color: #fff;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    padding-top: 24px;
    flex-direction: column;
    position: sticky; /* Make the footer sticky */
    bottom: 0; /* Stick to the bottom of the viewport */
    z-index: 10; /* Ensure it's above other content */
`;

const ButtonContainer = styled.div`
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 380px;
    gap: 16px;
    text-align: center;
    font: 600 16px/1 Gilroy, sans-serif;
    margin-bottom: 2%;
    padding: 0 10px;
`;

const Button = styled.button`
    font-feature-settings: "liga" off, "clig" off;
    align-self: stretch;
    flex: 1;
    min-width: 80px;
    border-radius: 20px;
    min-height: 40px;
    padding: 12px 16px;
    gap: 8px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
`;

const ShareButton = styled(Button)`
    background-color: #f6f9fd;
    box-shadow: 0px 4px 0px 0px #ced2d6;
    color: #00b899;
`;

const SetLimitsButton = styled(Button)`
    background-color: #00b899;
    box-shadow: 0px 4px 0px 0px #00866f;
    color: #fff;
`;

const Spacer = styled.div`
  height: 16px; /* Adjust height for desired spacing */
  width: 100%; /* Full width to ensure space is applied */
`;

const DetailsWrapper = styled.section`
  align-self: center;
  display: flex;
  margin-top: 64px;
  width: 400px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  color: #313234;
  text-align: center;
  justify-content: start;
  font: 600 14px/1 Gilroy, sans-serif;
`;

const DetailsList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  justify-content: center;
  padding: 0;
  list-style-type: none;
`;

const DetailItem = styled.li`
  border-radius: 16px;
  background-color: #f6f9fd;
  display: flex;
  gap: 4px;
  overflow: hidden;
  padding: 4px 16px 4px 8px;
  align-items: center;
  cursor: pointer;
`;

const DetailIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const DetailText = styled.span`
  font-feature-settings: "liga" off, "clig" off;
`;

const DetailsNote = styled.p`
  color: #929599;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  align-self: center;
  margin-top: 28px;
  width: 332px;
  font: 400 12px/16px Inter, sans-serif;
`;

export {
    BudgetCard,
    BudgetContent,
    PageDivider,
    ExpenseWrapper,
    BackgroundImage,
    ExpenseTitle,
    ExpenseCard,
    ExpenseAmount,
    TotalAmount,
    DailyAmount,
    ExchangeRate,
    ExpensesWrapper,
    ExpensesTitle,
    ExpensesList,
    ExpenseImage,
    ExpenseItem,
    ExpenseDetails,
    ForeignCountryAmount,
    DailyExpenseAmount,
    OffersWrapper,
    OffersTitle,
    OffersList,
    OfferItem,
    OfferIcon,
    OfferText,
    OfferImage,
    OfferHeader,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    TotalSavings,
    SavingsBreakdown,
    DetailCard,
    DetailContent,
    DetailTitle,
    DetailAmount,
    CardImage,
    BigCardImage,
    ButtonWrapper,
    ButtonContainer,
    Button,
    ShareButton,
    SetLimitsButton,
    Spacer,
    DetailsWrapper,
    DetailsList,
    DetailItem,
    DetailIcon,
    DetailText,
    DetailsNote,
};
