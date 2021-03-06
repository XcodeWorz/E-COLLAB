import React, { Component } from "react"
import ApplicationMenu from "../common/ApplicationMenu"
import PerfectScrollbar from "react-perfect-scrollbar"

export default class ProjectMenu extends Component {
  render() {
    return (
      <ApplicationMenu>
        <PerfectScrollbar
          option={{ suppressScrollX: true, wheelPropagation: false }}
        >
          <div className="p-4">
            <p className="text-muted text-small">Status</p>
            <ul className="list-unstyled mb-5">
              <div>
                <i className="simple-icon-reload" />
                All Projects
                <span className="float-right"></span>
              </div>
              <div>
                <i className="simple-icon-refresh" />
                Recommended
                <span className="float-right"></span>
              </div>
              <div>
                <i className="simple-icon-check" />
                Top 10
                <span className="float-right"></span>
              </div>
            </ul>
            <p className="text-muted text-small">Categories</p>
            <ul className="list-unstyled mb-5">
              <div>
                <i className="simple-icon-reload" />
                All categories
                <span className="float-right"></span>
              </div>
              <div>
                <i className="simple-icon-refresh" />
                Top 10
                <span className="float-right"></span>
              </div>
            </ul>
          </div>
        </PerfectScrollbar>
      </ApplicationMenu>
    )
  }
}
