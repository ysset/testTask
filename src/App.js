import React from 'react';
import 'flexboxgrid'
import 'denali-css/css/denali.css'
import 'denali-css/css/denali-dark-theme.css'
import 'denali-icon-font/dist/denali-icon-font.css'
import './App.css';
import Table from "./Components/Table/Table"
import LoadingSpiner from '../src/Components/LoadingSpiner/LoadingSpiner'
import {getState} from "./redux/meReducer";
import {bindActionCreators} from "redux";
import fetch from "./redux/fetch";
import {connect} from "react-redux";
/*SO I HAVE NO IDEA WHY BUT I DID IT VERY BAD*/
// Я СОВЕРШИЛ ОГРОМНУЮ ОШИБКУ ПРИ СОЗДАНИИ ПРИЛОЖЕНИЯ.
// ЧТО БЫ УБЕДИТЬСЯ В ЭТОМ ПРОШУ ПРОСЛЕДОВАТЬ В ПАПКУ REDUX/REDUCE.JS
// ТАМ ВЫ УВИДИТЕ STATE И ПОЙМЕТЕ ОТ КУДА ИДУТ ВСЕ ПРОБЛЕММЫ
// ТТК. Я РЕШИЛ НАПИСАТЬ  ТАБЛИЧКУ сам У МЕНЯ БЫЛИ БОЛЬШЫЕ ПРОБЛЕММЫ С КОНФЛИКТАМИ МЕЖДУ
// ПОИСКОМ, СОРТИРОВКОЙ, ПЕРЕКЛЮЧЕНИЕМ МЕЖДУ СТРИНИЦАМИ,
// А ВЫВОД ПОЛЬЗОВАТЕЛЯ В ОТДЕЛЬНОЕ ОКНО ВООБЩЕ НЕ СМОГ РЕАЛИЗОВАТЬ МОТОМУ ЧТО REACT НАЧИНАЕТ ПСИХОВАТЬ
// И УМИРАЕТ В ЦИКЛЕ.
// МНЕ СТОИЛО ПОДУМАТЬ НАД ГРАМОТНЫМ ИСПОЛЬЗОВАНИЕМ STATE.
// И ТАК КУЛЬМИНАЦИЯ ПОЧЕМУ Я ОБЛАЖАЛСЯ.
// МНЕ СТОИЛО С САМОГО НАЧАЛА ПИСАТЬ ВМЕСТЕ С REDUX И ГРАМОТНО ИСПОЛЬЗОВАТЬ ХРАНИЛИЩЕ
// ВМЕСТО ЭТОГО Я ВЫСТРЕЛИЛ СЕБЕ В НОГУ КОГДА РЕШИЛ ЧТО SLICE ЧТОБ ОБРЕЗАТЬ МАССИВ ЭТО КРУТО. =(
// В ОБЩЕМ Я НАКИДАЛ НЕМНОГО КОМЕНТОВ, ПРИЯТНОГО ПРОСМОТРА. =)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
        }

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.handleSendDataToFetchBig = this.handleSendDataToFetchBig.bind(this);
        this.handleSendDataToFetchSmall = this.handleSendDataToFetchSmall.bind(this);
    }

    shouldComponentRender() {
        const {pending} = this.props.state;
        if (pending === false) return false;
        return true;
    }

    handleSendDataToFetchBig(value) {
        this.props.fetchData(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        this.setState({pressed: true})
    }

    handleSendDataToFetchSmall() {
        this.props.fetchData('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        this.setState({pressed: true})
    }

    render() {
        const {error} = this.props.state
        if (this.shouldComponentRender()) return (
            <div className="modal is-active">
                <div className="modal-container center-xs">
                    <div className="row modal-content">

                        {!error && <>
                            <div className={'col-xs'}>
                                <button className={'button is-outline'}
                                        onClick={this.handleSendDataToFetchBig}>
                                    {!this.state.pressed && 'Big data'}
                                    {this.state.pressed && <LoadingSpiner/>}
                                </button>
                            </div>
                            <div className={'col-xs'}>
                                <button className={'button is-outline'}
                                        onClick={this.handleSendDataToFetchSmall}>
                                    {!this.state.pressed && 'Small data'}
                                    {this.state.pressed && <LoadingSpiner/>}
                                </button>
                            </div>
                        </>}

                        {error && <span className='product-list-error'>{error}</span>}
                    </div>
                </div>
            </div>
        )
        return <Table/>
    }
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetch,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
