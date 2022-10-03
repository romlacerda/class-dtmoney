import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>App development</td>
            <td className="deposit">$ 8000</td>
            <td>Development</td>
            <td>02/10/2022</td>
          </tr>
          <tr>
            <td>Renting</td>
            <td className="withdraw">- $ 1000</td>
            <td>House</td>
            <td>01/10/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}