{/* <div className="modal" ref={e=>modalOverlay3=e} onClick={e=>cancel(e)} style={{display:mDisplay3}}>
        <div className="carted-m">       
          { props.carted.length === 0 ? 
            <div className="empty-cart">
            <p>سلة المشتريات فارغة</p>
            <p>الرجاء إضافة الأطباق المرغوب بها</p>
            <p className="link" ref={e=>cancelButton3Bis=e} onClick={e=>cancel(e)}>رجوع إلى صفحة عرض الأطباق</p>
            
            </div>

          : <div className="carted-item" >
            <h3 className="title">سلة المشتريات</h3> 
            <table className="carted-table">
            <tr>
              <th>صورة الطبق</th>
              <th>الطبق</th>
              <th>سعر الطبق الواحد</th>
              <th> كمية الأطباق</th>
              <th>ثمن   أطباق</th> 
              <th>حذف الطبق</th> 
            </tr>
            {props.carted.map(e=>
              
            <tr key={e.id}>
              <td  className="carted-img" style={{ backgroundImage: `url( ${e.img} )` }}></td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td> <input className="order-dish-quantity" min="1" onChange={(a)=>{props.setQuantity(e.id,a.target.value*1)}} defaultValue={e.quantity} type="number"></input></td>
              <td>{e.quantity * e.price}</td>
              <td><button onClick={a=>props.removeFromCart(e.id)} className="remove-item">إحذف من السلة</button></td>
            </tr>
            )}
            </table>
            <div className="total">
                      <h4>الثمن الجملي :</h4>
                      <p>{total(props.carted)}</p>
                      <p>دينار </p>

              </div>
              {props.user === "none" ?
                <div>
                  <p className="notification">عليك بالدخول إلى حسابك أو تسجيل حساب جديد إذا كنت لاتملك واحدا ! </p>
                <div className="carted-btns">
                  <button ref={e=>cancelButton4=e} onClick={e=>{cancel(e);Oregister()}} className="confirm-o">تسجيل حساب جديد</button>
                  <button ref={e=>submitButton3=e} onClick={e=>{cancel(e);Ologin()}} className="confirm-o">الدخول إلى حسابك</button>
                  <button ref={e=>cancelButton3=e} onClick={e=>cancel(e)} className="cancel-o">إخفاء</button>
                </div>
                </div>
              : 
                <div>
                <div className="carted-btns">
                <button ref={e=>submitButton3=e} onClick={e=>{props.sendOrder(props.carted,props.user);cancel(e)}} className="confirm-o">تأكيد الطلب</button>
                <button ref={e=>cancelButton3=e} onClick={e=>cancel(e)} className="cancel-o">إخفاء</button>
              </div>

              </div>
              }
          </div> 
          </div>  */}