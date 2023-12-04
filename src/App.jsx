function App() {
  return (
    <>
      {/* <div id="loading">
        <div id="loading-center"></div>
      </div> */}

      <div className="wrapper">
        <div className="iq-sidebar  sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <a href="index.html" className="header-logo">
              <img
                src="../assets/images/logo.png"
                className="img-fluid rounded-normal light-logo"
                alt="logo"
              />
              <h5 className="logo-title light-logo ml-3">POSDash</h5>
            </a>
            <div className="iq-menu-bt-sidebar ml-0">
              <i className="las la-bars wrapper-menu" />
            </div>
          </div>
          <div className="data-scrollbar" data-scroll={1}>
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className="active">
                  <a href="index.html" className="svg-icon">
                    <svg
                      className="svg-icon"
                      id="p-dash1"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1={12} y1="22.08" x2={12} y2={12} />
                    </svg>
                    <span className="ml-4">Dashboards</span>
                  </a>
                </li>
                <li className=" ">
                  <a
                    href="#product"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash2"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span className="ml-4">Products</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="product"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-product.html">
                        <i className="las la-minus" />
                        <span>List Product</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-product.html">
                        <i className="las la-minus" />
                        <span>Add Product</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#category"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash3"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span className="ml-4">Categories</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="category"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-category.html">
                        <i className="las la-minus" />
                        <span>List Category</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-category.html">
                        <i className="las la-minus" />
                        <span>Add Category</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#sale"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash4"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                      <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                    <span className="ml-4">Sale</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="sale"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-sale.html">
                        <i className="las la-minus" />
                        <span>List Sale</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-sale.html">
                        <i className="las la-minus" />
                        <span>Add Sale</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#purchase"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash5"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                      <line x1={1} y1={10} x2={23} y2={10} />
                    </svg>
                    <span className="ml-4">Purchases</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="purchase"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-purchase.html">
                        <i className="las la-minus" />
                        <span>List Purchases</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-purchase.html">
                        <i className="las la-minus" />
                        <span>Add purchase</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#return"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash6"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="4 14 10 14 10 20" />
                      <polyline points="20 10 14 10 14 4" />
                      <line x1={14} y1={10} x2={21} y2={3} />
                      <line x1={3} y1={21} x2={10} y2={14} />
                    </svg>
                    <span className="ml-4">Returns</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="return"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-returns.html">
                        <i className="las la-minus" />
                        <span>List Returns</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-return.html">
                        <i className="las la-minus" />
                        <span>Add Return</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#people"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash8"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="ml-4">People</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="people"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className="">
                      <a href="page-list-customers.html">
                        <i className="las la-minus" />
                        <span>Customers</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-customers.html">
                        <i className="las la-minus" />
                        <span>Add Customers</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-list-users.html">
                        <i className="las la-minus" />
                        <span>Users</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-users.html">
                        <i className="las la-minus" />
                        <span>Add Users</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-list-suppliers.html">
                        <i className="las la-minus" />
                        <span>Suppliers</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="page-add-supplier.html">
                        <i className="las la-minus" />
                        <span>Add Suppliers</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="page-report.html" className="">
                    <svg
                      className="svg-icon"
                      id="p-dash7"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="ml-4">Reports</span>
                  </a>
                  <ul
                    id="reports"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <a
                    href="#otherpage"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash9"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                      <rect x={7} y={7} width={3} height={9} />
                      <rect x={14} y={7} width={3} height={5} />
                    </svg>
                    <span className="ml-4">other page</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="otherpage"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  >
                    <li className=" ">
                      <a
                        href="#user"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash10"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="8.5" cy={7} r={4} />
                          <polyline points="17 11 19 13 23 9" />
                        </svg>
                        <span className="ml-4">User Details</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="user"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="https://templates.iqonic.design/posdash/html/app/user-profile.html">
                            <i className="las la-minus" />
                            <span>User Profile</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="https://templates.iqonic.design/posdash/html/app/user-add.html">
                            <i className="las la-minus" />
                            <span>User Add</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="https://templates.iqonic.design/posdash/html/app/user-list.html">
                            <i className="las la-minus" />
                            <span>User List</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#ui"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash11"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                        <span className="ml-4">UI Elements</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="ui"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="ui-avatars.html">
                            <i className="las la-minus" />
                            <span>Avatars</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-alerts.html">
                            <i className="las la-minus" />
                            <span>Alerts</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-badges.html">
                            <i className="las la-minus" />
                            <span>Badges</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-breadcrumb.html">
                            <i className="las la-minus" />
                            <span>Breadcrumb</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-buttons.html">
                            <i className="las la-minus" />
                            <span>Buttons</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-buttons-group.html">
                            <i className="las la-minus" />
                            <span>Buttons Group</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-boxshadow.html">
                            <i className="las la-minus" />
                            <span>Box Shadow</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-colors.html">
                            <i className="las la-minus" />
                            <span>Colors</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-cards.html">
                            <i className="las la-minus" />
                            <span>Cards</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-carousel.html">
                            <i className="las la-minus" />
                            <span>Carousel</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-grid.html">
                            <i className="las la-minus" />
                            <span>Grid</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-helper-classes.html">
                            <i className="las la-minus" />
                            <span>Helper classes</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-images.html">
                            <i className="las la-minus" />
                            <span>Images</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-list-group.html">
                            <i className="las la-minus" />
                            <span>list Group</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-media-object.html">
                            <i className="las la-minus" />
                            <span>Media</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-modal.html">
                            <i className="las la-minus" />
                            <span>Modal</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-notifications.html">
                            <i className="las la-minus" />
                            <span>Notifications</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-pagination.html">
                            <i className="las la-minus" />
                            <span>Pagination</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-popovers.html">
                            <i className="las la-minus" />
                            <span>Popovers</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-progressbars.html">
                            <i className="las la-minus" />
                            <span>Progressbars</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-typography.html">
                            <i className="las la-minus" />
                            <span>Typography</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-tabs.html">
                            <i className="las la-minus" />
                            <span>Tabs</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-tooltips.html">
                            <i className="las la-minus" />
                            <span>Tooltips</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="ui-embed-video.html">
                            <i className="las la-minus" />
                            <span>Video</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#auth"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash12"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1={16} y1={13} x2={8} y2={13} />
                          <line x1={16} y1={17} x2={8} y2={17} />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span className="ml-4">Authentication</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="auth"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="auth-sign-in.html">
                            <i className="las la-minus" />
                            <span>Login</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="auth-sign-up.html">
                            <i className="las la-minus" />
                            <span>Register</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="auth-recoverpw.html">
                            <i className="las la-minus" />
                            <span>Recover Password</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="auth-confirm-mail.html">
                            <i className="las la-minus" />
                            <span>Confirm Mail</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="auth-lock-screen.html">
                            <i className="las la-minus" />
                            <span>Lock Screen</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a
                        href="#form"
                        className="collapsed svg-icon"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash13"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                          <rect
                            x={8}
                            y={2}
                            width={8}
                            height={4}
                            rx={1}
                            ry={1}
                          />
                        </svg>
                        <span className="ml-4">Forms</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="form"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="form-layout.html">
                            <i className="las la-minus" />
                            <span className="">Form Elements</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-input-group.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Input</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-validation.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Validation</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-switch.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Switch</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-chechbox.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Checkbox</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-radio.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Radio</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="form-textarea.html" className="svg-icon">
                            <i className="las la-minus" />
                            <span className="">Form Textarea</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#table"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash14"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x={3} y={3} width={7} height={7} />
                          <rect x={14} y={3} width={7} height={7} />
                          <rect x={14} y={14} width={7} height={7} />
                          <rect x={3} y={14} width={7} height={7} />
                        </svg>
                        <span className="ml-4">Table</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="table"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="tables-basic.html">
                            <i className="las la-minus" />
                            <span>Basic Tables</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="table-data.html">
                            <i className="las la-minus" />
                            <span>Data Table</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="table-tree.html">
                            <i className="las la-minus" />
                            <span>Table Tree</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className=" ">
                      <a
                        href="#pricing"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash16"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <ellipse cx={12} cy={5} rx={9} ry={3} />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                        <span className="ml-4">Pricing</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="pricing"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="pricing.html">
                            <i className="las la-minus" />
                            <span>Pricing 1</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="pricing-2.html">
                            <i className="las la-minus" />
                            <span>Pricing 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="pages-invoice.html" className="svg-icon">
                        <svg
                          className="svg-icon"
                          id="p-dash07"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1={16} y1={13} x2={8} y2={13} />
                          <line x1={16} y1={17} x2={8} y2={17} />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span className="ml-4">Invoice</span>
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="#pages-error"
                        className="collapsed"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        <svg
                          className="svg-icon"
                          id="p-dash17"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1={12} y1={9} x2={12} y2={13} />
                          <line x1={12} y1={17} x2="12.01" y2={17} />
                        </svg>
                        <span className="ml-4">Error</span>
                        <svg
                          className="svg-icon iq-arrow-right arrow-active"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="10 15 15 20 20 15" />
                          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                        </svg>
                      </a>
                      <ul
                        id="pages-error"
                        className="iq-submenu collapse"
                        data-parent="#otherpage"
                      >
                        <li className="">
                          <a href="pages-error.html">
                            <i className="las la-minus" />
                            <span>Error 404</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="pages-error-500.html">
                            <i className="las la-minus" />
                            <span>Error 500</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="pages-blank-page.html">
                        <svg
                          className="svg-icon"
                          id="p-dash18"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                          <polyline points="13 2 13 9 20 9" />
                        </svg>
                        <span className="ml-4">Blank Page</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="pages-maintenance.html">
                        <svg
                          className="svg-icon"
                          id="p-dash19"
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <span className="ml-4">Maintenance</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div
              id="sidebar-bottom"
              className="position-relative sidebar-bottom"
            >
              <div className="card border-none">
                <div className="card-body p-0">
                  <div className="sidebarbottom-content">
                    <div className="image">
                      <img
                        src="../assets/images/layouts/side-bkg.png"
                        className="img-fluid"
                        alt="side-bkg"
                      />
                    </div>
                    <h6 className="mt-4 px-4 body-title">
                      Get More Feature by Upgrading
                    </h6>
                    <button
                      type="button"
                      className="btn sidebar-bottom-btn mt-4"
                    >
                      Go Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3" />
          </div>
        </div>{" "}
        <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <i className="ri-menu-line wrapper-menu" />
                <a href="index.html" className="header-logo">
                  <img
                    src="../assets/images/logo.png"
                    className="img-fluid rounded-normal"
                    alt="logo"
                  />
                  <h5 className="logo-title ml-3">POSDash</h5>
                </a>
              </div>
              <div className="iq-search-bar device-search">
                <form action="#" className="searchbox">
                  <a className="search-link" href="#">
                    <i className="ri-search-line" />
                  </a>
                  <input
                    type="text"
                    className="text search-input"
                    placeholder="Search here..."
                  />
                </form>
              </div>
              <div className="d-flex align-items-center">
                {/*<div class="change-mode">
                    <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
                        <div class="custom-switch-inner">
                            <p class="mb-0"> </p>
                            <input type="checkbox" class="custom-control-input" id="dark-mode" data-active="true">
                            <label class="custom-control-label" for="dark-mode" data-mode="toggle">
                                <span class="switch-icon-left"><i class="a-left ri-moon-clear-line"></i></span>
                                <span class="switch-icon-right"><i class="a-right ri-sun-line"></i></span>
                            </label>
                        </div>
                    </div>
                </div>*/}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-label="Toggle navigation"
                >
                  <i className="ri-menu-3-line" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-list align-items-center">
                    <li className="nav-item nav-icon dropdown">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle btn border add-btn"
                        id="dropdownMenuButton02"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="../assets/images/small/flag-01.png"
                          alt="img-flag"
                          className="img-fluid image-flag mr-2"
                        />
                        En
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-3">
                            <a className="iq-sub-card" href="#">
                              <img
                                src="../assets/images/small/flag-02.png"
                                alt="img-flag"
                                className="img-fluid mr-2"
                              />
                              French
                            </a>
                            <a className="iq-sub-card" href="#">
                              <img
                                src="../assets/images/small/flag-03.png"
                                alt="img-flag"
                                className="img-fluid mr-2"
                              />
                              Spanish
                            </a>
                            <a className="iq-sub-card" href="#">
                              <img
                                src="../assets/images/small/flag-04.png"
                                alt="img-flag"
                                className="img-fluid mr-2"
                              />
                              Italian
                            </a>
                            <a className="iq-sub-card" href="#">
                              <img
                                src="../assets/images/small/flag-05.png"
                                alt="img-flag"
                                className="img-fluid mr-2"
                              />
                              German
                            </a>
                            <a className="iq-sub-card" href="#">
                              <img
                                src="../assets/images/small/flag-06.png"
                                alt="img-flag"
                                className="img-fluid mr-2"
                              />
                              Japanese
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn border add-btn shadow-none mx-2 d-none d-md-block"
                        data-toggle="modal"
                        data-target="#new-order"
                      >
                        <i className="las la-plus mr-2" />
                        New Order
                      </a>
                    </li>
                    <li className="nav-item nav-icon search-content">
                      <a
                        href="#"
                        className="search-toggle rounded"
                        id="dropdownSearch"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-search-line" />
                      </a>
                      <div
                        className="iq-search-bar iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownSearch"
                      >
                        <form action="#" className="searchbox p-2">
                          <div className="form-group mb-0 position-relative">
                            <input
                              type="text"
                              className="text search-input font-size-12"
                              placeholder="type here to search..."
                            />
                            <a href="#" className="search-link">
                              <i className="las la-search" />
                            </a>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="bg-primary" />
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 ">
                            <div className="cust-title p-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <h5 className="mb-0">All Messages</h5>
                                <a
                                  className="badge badge-primary badge-card"
                                  href="#"
                                >
                                  3
                                </a>
                              </div>
                            </div>
                            <div className="px-3 pt-0 pb-0 sub-card">
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3 border-bottom">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/01.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Emma Watson</h6>
                                      <small className="text-dark">
                                        <b>12 : 47 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3 border-bottom">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/02.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Ashlynn Franci</h6>
                                      <small className="text-dark">
                                        <b>11 : 30 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/03.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Kianna Carder</h6>
                                      <small className="text-dark">
                                        <b>11 : 21 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <a
                              className="right-ic btn btn-primary btn-block position-relative p-2"
                              href="#"
                              role="button"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-bell"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        <span className="bg-primary " />
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 ">
                            <div className="cust-title p-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <h5 className="mb-0">Notifications</h5>
                                <a
                                  className="badge badge-primary badge-card"
                                  href="#"
                                >
                                  3
                                </a>
                              </div>
                            </div>
                            <div className="px-3 pt-0 pb-0 sub-card">
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3 border-bottom">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/01.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Emma Watson</h6>
                                      <small className="text-dark">
                                        <b>12 : 47 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3 border-bottom">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/02.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Ashlynn Franci</h6>
                                      <small className="text-dark">
                                        <b>11 : 30 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" className="iq-sub-card">
                                <div className="media align-items-center cust-card py-3">
                                  <div className="">
                                    <img
                                      className="avatar-50 rounded-small"
                                      src="../assets/images/user/03.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <h6 className="mb-0">Kianna Carder</h6>
                                      <small className="text-dark">
                                        <b>11 : 21 pm</b>
                                      </small>
                                    </div>
                                    <small className="mb-0">
                                      Lorem ipsum dolor sit amet
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <a
                              className="right-ic btn btn-primary btn-block position-relative p-2"
                              href="#"
                              role="button"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown caption-content">
                      <a
                        href="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="../assets/images/user/1.png"
                          className="img-fluid rounded"
                          alt="user"
                        />
                      </a>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 text-center">
                            <div className="media-body profile-detail text-center">
                              <img
                                src="../assets/images/page-img/profile-bg.jpg"
                                alt="profile-bg"
                                className="rounded-top img-fluid mb-4"
                              />
                              <img
                                src="../assets/images/user/1.png"
                                alt="profile-img"
                                className="rounded profile-img img-fluid avatar-70"
                              />
                            </div>
                            <div className="p-3">
                              <h5 className="mb-1">JoanDuo@property.com</h5>
                              <p className="mb-0">Since 10 march, 2020</p>
                              <div className="d-flex align-items-center justify-content-center mt-3">
                                <a
                                  href="https://templates.iqonic.design/posdash/html/app/user-profile.html"
                                  className="btn border mr-2"
                                >
                                  Profile
                                </a>
                                <a
                                  href="auth-sign-in.html"
                                  className="btn border"
                                >
                                  Sign Out
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div
          className="modal fade"
          id="new-order"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="popup text-left">
                  <h4 className="mb-3">New Order</h4>
                  <div className="content create-workform bg-body">
                    <div className="pb-3">
                      <label className="mb-2">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name or Email"
                      />
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                        <div
                          className="btn btn-primary mr-4"
                          data-dismiss="modal"
                        >
                          Cancel
                        </div>
                        <div
                          className="btn btn-outline-primary"
                          data-dismiss="modal"
                        >
                          Create
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="card card-transparent card-block card-stretch card-height border-none">
                  <div className="card-body p-0 mt-lg-2 mt-0">
                    <h3 className="mb-3">Hi Graham, Good Morning</h3>
                    <p className="mb-0 mr-4">
                      Your dashboard gives you views of key performance or
                      business process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-info-light">
                            <img
                              src="../assets/images/product/1.png"
                              className="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div>
                            <p className="mb-2">Total Sales</p>
                            <h4>31.50</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span
                            className="bg-info iq-progress progress-1"
                            data-percent={85}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-danger-light">
                            <img
                              src="../assets/images/product/2.png"
                              className="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div>
                            <p className="mb-2">Total Cost</p>
                            <h4>$ 4598</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span
                            className="bg-danger iq-progress progress-1"
                            data-percent={70}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card card-block card-stretch card-height">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4 card-total-sale">
                          <div className="icon iq-icon-box-2 bg-success-light">
                            <img
                              src="../assets/images/product/3.png"
                              className="img-fluid"
                              alt="image"
                            />
                          </div>
                          <div>
                            <p className="mb-2">Product Sold</p>
                            <h4>4589 M</h4>
                          </div>
                        </div>
                        <div className="iq-progress-bar mt-2">
                          <span
                            className="bg-success iq-progress progress-1"
                            data-percent={75}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Overview</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn"
                          id="dropdownMenuButton001"
                          data-toggle="dropdown"
                        >
                          This Month
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton001"
                        >
                          <a className="dropdown-item" href="#">
                            Year
                          </a>
                          <a className="dropdown-item" href="#">
                            Month
                          </a>
                          <a className="dropdown-item" href="#">
                            Week
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="layout1-chart1" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Revenue Vs Cost</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn"
                          id="dropdownMenuButton002"
                          data-toggle="dropdown"
                        >
                          This Month
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton002"
                        >
                          <a className="dropdown-item" href="#">
                            Yearly
                          </a>
                          <a className="dropdown-item" href="#">
                            Monthly
                          </a>
                          <a className="dropdown-item" href="#">
                            Weekly
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="layout1-chart-2" style={{ minHeight: 360 }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Top Products</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn"
                          id="dropdownMenuButton006"
                          data-toggle="dropdown"
                        >
                          This Month
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton006"
                        >
                          <a className="dropdown-item" href="#">
                            Year
                          </a>
                          <a className="dropdown-item" href="#">
                            Month
                          </a>
                          <a className="dropdown-item" href="#">
                            Week
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled row top-product mb-0">
                      <li className="col-lg-3">
                        <div className="card card-block card-stretch card-height mb-0">
                          <div className="card-body">
                            <div className="bg-warning-light rounded">
                              <img
                                src="../assets/images/product/01.png"
                                className="style-img img-fluid m-auto p-3"
                                alt="image"
                              />
                            </div>
                            <div className="style-text text-left mt-3">
                              <h5 className="mb-1">Organic Cream</h5>
                              <p className="mb-0">789 Item</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-3">
                        <div className="card card-block card-stretch card-height mb-0">
                          <div className="card-body">
                            <div className="bg-danger-light rounded">
                              <img
                                src="../assets/images/product/02.png"
                                className="style-img img-fluid m-auto p-3"
                                alt="image"
                              />
                            </div>
                            <div className="style-text text-left mt-3">
                              <h5 className="mb-1">Rain Umbrella</h5>
                              <p className="mb-0">657 Item</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-3">
                        <div className="card card-block card-stretch card-height mb-0">
                          <div className="card-body">
                            <div className="bg-info-light rounded">
                              <img
                                src="../assets/images/product/03.png"
                                className="style-img img-fluid m-auto p-3"
                                alt="image"
                              />
                            </div>
                            <div className="style-text text-left mt-3">
                              <h5 className="mb-1">Serum Bottle</h5>
                              <p className="mb-0">489 Item</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-3">
                        <div className="card card-block card-stretch card-height mb-0">
                          <div className="card-body">
                            <div className="bg-success-light rounded">
                              <img
                                src="../assets/images/product/02.png"
                                className="style-img img-fluid m-auto p-3"
                                alt="image"
                              />
                            </div>
                            <div className="style-text text-left mt-3">
                              <h5 className="mb-1">Organic Cream</h5>
                              <p className="mb-0">468 Item</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-transparent card-block card-stretch mb-4">
                  <div className="card-header d-flex align-items-center justify-content-between p-0">
                    <div className="header-title">
                      <h4 className="card-title mb-0">Best Item All Time</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div>
                        <a
                          href="#"
                          className="btn btn-primary view-btn font-size-14"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-block card-stretch card-height-helf">
                  <div className="card-body card-item-right">
                    <div className="d-flex align-items-top">
                      <div className="bg-warning-light rounded">
                        <img
                          src="../assets/images/product/04.png"
                          className="style-img img-fluid m-auto"
                          alt="image"
                        />
                      </div>
                      <div className="style-text text-left">
                        <h5 className="mb-2">Coffee Beans Packet</h5>
                        <p className="mb-2">Total Sell : 45897</p>
                        <p className="mb-0">Total Earned : $45,89 M</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-block card-stretch card-height-helf">
                  <div className="card-body card-item-right">
                    <div className="d-flex align-items-top">
                      <div className="bg-danger-light rounded">
                        <img
                          src="../assets/images/product/05.png"
                          className="style-img img-fluid m-auto"
                          alt="image"
                        />
                      </div>
                      <div className="style-text text-left">
                        <h5 className="mb-2">Bottle Cup Set</h5>
                        <p className="mb-2">Total Sell : 44359</p>
                        <p className="mb-0">Total Earned : $45,50 M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-block card-stretch card-height-helf">
                  <div className="card-body">
                    <div className="d-flex align-items-top justify-content-between">
                      <div className="">
                        <p className="mb-0">Income</p>
                        <h5>$ 98,7800 K</h5>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle dropdown-bg btn"
                            id="dropdownMenuButton003"
                            data-toggle="dropdown"
                          >
                            This Month
                            <i className="ri-arrow-down-s-line ml-1" />
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow-none"
                            aria-labelledby="dropdownMenuButton003"
                          >
                            <a className="dropdown-item" href="#">
                              Year
                            </a>
                            <a className="dropdown-item" href="#">
                              Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Week
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="layout1-chart-3" className="layout-chart-1" />
                  </div>
                </div>
                <div className="card card-block card-stretch card-height-helf">
                  <div className="card-body">
                    <div className="d-flex align-items-top justify-content-between">
                      <div className="">
                        <p className="mb-0">Expenses</p>
                        <h5>$ 45,8956 K</h5>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle dropdown-bg btn"
                            id="dropdownMenuButton004"
                            data-toggle="dropdown"
                          >
                            This Month
                            <i className="ri-arrow-down-s-line ml-1" />
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow-none"
                            aria-labelledby="dropdownMenuButton004"
                          >
                            <a className="dropdown-item" href="#">
                              Year
                            </a>
                            <a className="dropdown-item" href="#">
                              Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Week
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="layout1-chart-4" className="layout-chart-2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <h4 className="card-title">Order Summary</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn"
                          id="dropdownMenuButton005"
                          data-toggle="dropdown"
                        >
                          This Month
                          <i className="ri-arrow-down-s-line ml-1" />
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton005"
                        >
                          <a className="dropdown-item" href="#">
                            Year
                          </a>
                          <a className="dropdown-item" href="#">
                            Month
                          </a>
                          <a className="dropdown-item" href="#">
                            Week
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    <div className="d-flex flex-wrap align-items-center mt-2">
                      <div className="d-flex align-items-center progress-order-left">
                        <div
                          className="progress progress-round m-0 orange conversation-bar"
                          data-percent={46}
                        >
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                          <div className="progress-value text-secondary">
                            46%
                          </div>
                        </div>
                        <div className="progress-value ml-3 pr-5 border-right">
                          <h5>$12,6598</h5>
                          <p className="mb-0">Average Orders</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center ml-5 progress-order-right">
                        <div
                          className="progress progress-round m-0 primary conversation-bar"
                          data-percent={46}
                        >
                          <span className="progress-left">
                            <span className="progress-bar" />
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar" />
                          </span>
                          <div className="progress-value text-primary">46%</div>
                        </div>
                        <div className="progress-value ml-3">
                          <h5>$59,8478</h5>
                          <p className="mb-0">Top Orders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div id="layout1-chart-5" />
                  </div>
                </div>
              </div>
            </div>
            {/* Page end  */}
          </div>
        </div>
      </div>
      {/* Wrapper End*/}
      <footer className="iq-footer">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="terms-of-service.html">Terms of Use</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 text-right">
                  <span className="mr-1">©</span>{" "}
                  <a href="#" className="">
                    POS Dash
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
