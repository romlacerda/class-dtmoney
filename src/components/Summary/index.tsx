import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
      <Container>
        <div>
          <header>
            <p>Incomes</p>
            <img src={incomeImg} alt="Incomes" />
          </header>
          <strong>$ 1000,00</strong>
        </div>
        <div>
          <header>
            <p>Outcome</p>
            <img src={outcomeImg} alt="Incomes" />
          </header>
          <strong>- $ 300,00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>$ 2700,00</strong>
        </div>
      </Container>
  )
}