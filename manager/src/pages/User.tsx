import React from "react";
import { User1Img, User2Img, User3Img, UserColorImg } from "../assets/images";
import "../assets/sass/pages/user.scss";
import { TopTitle } from "../components/Common";

export const User = () => {
    return (
        <div className='user-wrapper'>
            <TopTitle img={UserColorImg} title='User' subTitle='Manage user' />

            <div className='box'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={User1Img} alt='' />
                            </td>
                            <td>Mark Well</td>
                            <td>102 Baker st</td>
                            <td>0978654321</td>
                            <td className='email'>
                                markwellhandsome@gmail.com
                            </td>
                            <td className='profit'>$450.00</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={User2Img} alt='' />
                            </td>
                            <td>John Weak</td>
                            <td>1 Tran Khanh Du St</td>
                            <td>0978654321</td>
                            <td className='email'>pencil_killer@gmail.com</td>
                            <td className='profit'>$500.00</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={User3Img} alt='' />
                            </td>
                            <td>Mr.Johnson</td>
                            <td>102 Baker st</td>
                            <td>0978654321</td>
                            <td className='email'>meowmeow@gmail.com</td>
                            <td className='profit'>$1500.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
