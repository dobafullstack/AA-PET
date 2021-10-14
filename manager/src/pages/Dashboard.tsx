import React from "react";
import { Box, BoxItem, Diagram, TopTitle } from "../components/Common";
import {
    BusinessImg,
    DashboardColorImg,
    CashImg,
    GoodsImg,
    ProfitImg,
    SalePerformanceImg,
    StoreImg,
    DogImg,
    CatImg,
    SaleDiagramImg,
} from "../assets/images";
import "../assets/sass/pages/dashboard.scss";

export const Dashboard = () => {
    return (
        <div>
            <TopTitle
                img={DashboardColorImg}
                title='Dashboard'
                subTitle='Display income and diagram'
            />

            <Box img={BusinessImg} title='Business Performance'>
                <div className='box-item-wrapper'>
                    <BoxItem
                        img={CashImg}
                        title='Cash Deposit'
                        mainText='$2.5 Millions'
                        className='cash'
                    />
                    <BoxItem
                        img={GoodsImg}
                        title='Fund'
                        mainText='$1.2 Millions'
                        className='goods'
                    />
                    <BoxItem
                        img={ProfitImg}
                        title='Profit'
                        mainText='$1450.00'
                        className='profit'
                    />
                </div>
            </Box>
            <Box img={SalePerformanceImg} title='Sale Performance'>
                <div className='box-item-wrapper'>
                    <BoxItem
                        img={StoreImg}
                        title='Items Sale'
                        mainText='357 items'
                        className='store'
                    />
                    <BoxItem
                        img={DogImg}
                        title='Dog Sale'
                        mainText='32 dogs'
                        className='dog'
                    />
                    <BoxItem
                        img={CatImg}
                        title='Cat Sale'
                        mainText='200 cats'
                        className='cat'
                    />
                </div>
            </Box>

            <Box img={SaleDiagramImg} title='Sale Diagram'>
                <Diagram />
            </Box>
        </div>
    );
};
