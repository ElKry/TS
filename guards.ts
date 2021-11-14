// конструкции для работы с типами в TS typeof instanceof type

function strip(x: string | number): string | number {
  if (typeof x === 'number')
    return x.toFixed(2)

  return x.trim()
}

//====================

class MyResponse {
  header = 'res header';
  result = 'res result'
}

class MyError {
  header = 'err header';
  message = 'err msg'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  }

  if (res instanceof MyError) {
    return {
      info: res.header + res.message
    }
  }
}

//============

type AlertType = 'success' | 'error' | 'warning';

function setAlertType(type: AlertType) {

}
setAlertType('success');
setAlertType('error');
// setAlertType('default'); не отработает так как такого значения нет в типе AlertType